/**
 * The type of notification feedback generated by a `UINotificationFeedbackGenerator` object.
 * [`UINotificationFeedbackType`](https://developer.apple.com/documentation/uikit/uinotificationfeedbackgenerator/feedbacktype).
 */
export declare enum NotificationFeedbackType {
    /**
     * A notification feedback type indicating that a task has completed successfully.
     */
    Success = "success",
    /**
     * A notification feedback type indicating that a task has produced a warning.
     */
    Warning = "warning",
    /**
     * A notification feedback type indicating that a task has failed.
     */
    Error = "error"
}
/**
 * The mass of the objects in the collision simulated by a `UIImpactFeedbackGenerator` object
 * [`UINotificationFeedbackStyle`](https://developer.apple.com/documentation/uikit/uiimpactfeedbackgenerator/feedbackstyle).
 */
export declare enum ImpactFeedbackStyle {
    /**
     * A collision between small, light user interface elements.
     */
    Light = "light",
    /**
     * A collision between moderately sized user interface elements.
     */
    Medium = "medium",
    /**
     * A collision between large, heavy user interface elements.
     */
    Heavy = "heavy",
    /**
     * A collision between user interface elements that are soft, exhibiting a large amount of compression or elasticity.
     */
    Soft = "soft",
    /**
     * A collision between user interface elements that are rigid, exhibiting a small amount of compression or elasticity.
     */
    Rigid = "rigid"
}
/**
 * @platform android
 */
export declare enum AndroidHaptics {
    /**
     * A haptic effect to signal the confirmation or successful completion of a user interaction.
     */
    Confirm = "confirm",
    /**
     * A haptic effect to signal the rejection or failure of a user interaction.
     */
    Reject = "reject",
    /**
     * The user has started a gesture (for example, on the soft keyboard).
     */
    Gesture_Start = "gesture-start",
    /**
     * The user has finished a gesture (for example, on the soft keyboard).
     */
    Gesture_End = "gesture-end",
    /**
     * The user has toggled a switch or button into the on position.
     */
    Toggle_On = "toggle-on",
    /**
     * The user has toggled a switch or button into the off position.
     */
    Toggle_Off = "toggle-off",
    /**
     * The user has pressed either an hour or minute tick of a Clock.
     */
    Clock_Tick = "clock-tick",
    /**
     * The user has performed a context click on an object.
     */
    Context_Click = "context-click",
    /**
     * The user has started a drag-and-drop gesture. The drag target has just been "picked up".
     */
    Drag_Start = "drag-start",
    /**
     * The user has pressed a soft keyboard key.
     */
    Keyboard_Tap = "keyboard-tap",
    /**
     * The user has pressed a virtual or software keyboard key.
     */
    Keyboard_Press = "keyboard-press",
    /**
     * The user has released a virtual keyboard key.
     */
    Keyboard_Release = "keyboard-release",
    /**
     * The user has performed a long press on an object that results in an action being performed.
     */
    Long_Press = "long-press",
    /**
     * The user has pressed on a virtual on-screen key.
     */
    Virtual_Key = "virtual-key",
    /**
     * The user has released a virtual key.
     */
    Virtual_Key_Release = "virtual-key-release",
    /**
     * No haptic feedback should be performed.
     */
    No_Haptics = "no-haptics",
    /**
     * The user is switching between a series of potential choices. For example, items in a list or discrete points on a slider.
     */
    Segment_Tick = "segment-tick",
    /**
     * The user is switching between a series of many potential choices. For example, minutes on a clock face or individual percentages.
     * This constant is expected to be very soft, so as not to be uncomfortable when performed a lot in quick succession.
     * If the device can't make a suitably soft vibration, then it may not make any vibration.
     */
    Segment_Frequent_Tick = "segment-frequent-tick",
    /**
     * The user has performed a selection/insertion handle move on text field.
     */
    Text_Handle_Move = "text-handle-move"
}
//# sourceMappingURL=Haptics.types.d.ts.map