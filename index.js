
function safetySwitchTriggerCheck() {
    if (process.env.SAFETY_SWITCH_IS_RELEASED!=="true") {
        throw "SAFETY_SWITCH_IS_RELEASED does not exist - exiting!"
        process.exit(1);
    }
}
module.exports = safetySwitchTriggerCheck();
