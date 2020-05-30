import React from 'react'


function toggleSwitch(){
    return (
        <div class="toggle-switch">
            <input type="checkbox" class="toggle-switch-checkbox" name="toggleSwitch" id="toggleSwitch"/>
            <label class="toggle-switch-label" for="toggleSwitch">
                Toggle Me!
            </label>

        </div>
    )
}

export default toggleSwitch