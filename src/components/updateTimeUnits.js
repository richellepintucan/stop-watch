import formatTimeUnit from '../utils/formatTimeUnit.js';
import formatMilliseconds from '../utils/formatMilliseconds.js';

/**
 * Updates the time components in the DOM.
 *
 * @param {object} time - The time object containing milliseconds, seconds, minutes, and oldSeconds properties.
 */

const updateTimeComponent = (timeDom, time) => {
    // update milliseconds
    timeDom.querySelector('.milliseconds').innerHTML = formatMilliseconds(
        time.milliseconds,
    );

    // update seconds only after 1000 milliseconds
    if (time.seconds !== time.oldSeconds) {
        timeDom.querySelector('.seconds').innerHTML = formatTimeUnit(
            time.seconds,
        );
    }

    // update minutes only after 60 seconds
    if (time.minutes !== time.oldMinutes) {
        timeDom.querySelector('.minutes').innerHTML = formatTimeUnit(
            time.minutes,
        );
    }

    time.oldMinutes = time.minutes;
    time.oldSeconds = time.seconds;
};

export default updateTimeComponent;
