import ExpoModulesCore
import SwiftUI
import CoreHaptics

public class HapticsModule: Module {
  public func definition() -> ModuleDefinition {
    Name("ExpoHaptics")

    AsyncFunction("notificationAsync") { (notificationType: NotificationType) in
      let generator = UINotificationFeedbackGenerator()
      generator.prepare()
      generator.notificationOccurred(notificationType.toFeedbackType())
    }
    .runOnQueue(.main)

    AsyncFunction("impactAsync") { (style: ImpactStyle) in
      let generator = UIImpactFeedbackGenerator(style: style.toFeedbackStyle())
      generator.prepare()
      generator.impactOccurred()
    }
    .runOnQueue(.main)

    AsyncFunction("selectionAsync") {
      let generator = UISelectionFeedbackGenerator()
      generator.prepare()
      generator.selectionChanged()
    }
    .runOnQueue(.main)
    
    // New modular function to handle intensity, sharpness, and events
    AsyncFunction("customHapticFeedbackAsync") { (intensity: Double, sharpness: Double, relativeTime: Double) in
      guard CHHapticEngine.capabilitiesForHardware().supportsHaptics else { return }
      var events = [CHHapticEvent]()
      
      let intensityParam = CHHapticEventParameter(parameterID: .hapticIntensity, value: Float(intensity))
      let sharpnessParam = CHHapticEventParameter(parameterID: .hapticSharpness, value: Float(sharpness))
      let event = CHHapticEvent(eventType: .hapticTransient, parameters: [intensityParam, sharpnessParam], relativeTime: relativeTime)
      events.append(event)
      
      do {
        let pattern = try CHHapticPattern(events: events, parameters: [])
        let player = try self.engine?.makePlayer(with: pattern)
        try player?.start(atTime: 0)
      } catch {
        print("Failed to play pattern: \(error.localizedDescription).")
      }
    }
    .runOnQueue(.main)
  }

  enum NotificationType: String, EnumArgument {
    case success
    case warning
    case error

    func toFeedbackType() -> UINotificationFeedbackGenerator.FeedbackType {
      switch self {
      case .success:
        return .success
      case .warning:
        return .warning
      case .error:
        return .error
      }
    }
  }

  enum ImpactStyle: String, EnumArgument {
    case light
    case medium
    case heavy

    func toFeedbackStyle() -> UIImpactFeedbackGenerator.FeedbackStyle {
      switch self {
      case .light:
        return .light
      case .medium:
        return .medium
      case .heavy:
        return .heavy
      }
    }
  }
  
  @State private var engine: CHHapticEngine?
  
  func prepareHaptics() {
    guard CHHapticEngine.capabilitiesForHardware().supportsHaptics else { return }

    do {
      engine = try CHHapticEngine()
      try engine?.start()
    } catch {
      print("There was an error creating the engine: \(error.localizedDescription)")
    }
  }
}
