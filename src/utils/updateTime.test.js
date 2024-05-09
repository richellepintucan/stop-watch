/**
 * @jest-environment jsdom
 */

import updateTime from './updateTime.js';

describe('updateTime', () => {
    test('increments milliseconds and adjusts seconds and minutes accordingly', () => {
        const initialTime = {
            milliseconds: 990,
            seconds: 59,
            minutes: 59,
        };

        const updatedTime = updateTime(initialTime);

        // Milliseconds should be incremented by 10
        expect(updatedTime.milliseconds).toEqual(0);

        // Seconds should be incremented if milliseconds reach 1000
        expect(updatedTime.seconds).toEqual(0);

        // Minutes should be incremented if seconds reach 60
        expect(updatedTime.minutes).toEqual(0);
    });

    test('increments milliseconds only', () => {
        const initialTime = {
            milliseconds: 990,
            seconds: 0,
            minutes: 0,
        };

        const updatedTime = updateTime(initialTime);

        // Milliseconds should be incremented by 10
        expect(updatedTime.milliseconds).toEqual(0);

        // Seconds and minutes should remain the same
        expect(updatedTime.seconds).toEqual(1);
        expect(updatedTime.minutes).toEqual(0);
    });

    test('increments seconds and adjusts minutes accordingly', () => {
        const initialTime = {
            milliseconds: 990,
            seconds: 59,
            minutes: 0,
        };

        const updatedTime = updateTime(initialTime);

        // Milliseconds should be reset to 0
        expect(updatedTime.milliseconds).toEqual(0);

        // Seconds should be reset to 0 and minutes should be incremented
        expect(updatedTime.seconds).toEqual(0);
        expect(updatedTime.minutes).toEqual(1);
    });

    test('increments minutes only', () => {
        const initialTime = {
            milliseconds: 0,
            seconds: 0,
            minutes: 59,
        };

        const updatedTime = updateTime(initialTime);

        // Milliseconds, seconds should remain 0
        expect(updatedTime.milliseconds).toEqual(10);
        expect(updatedTime.seconds).toEqual(0);

        // Minutes should be incremented and not reset to 0
        expect(updatedTime.minutes).toEqual(59);
    });

    test('does not update time if milliseconds < 1000', () => {
        const initialTime = {
            milliseconds: 500,
            seconds: 0,
            minutes: 0,
        };

        const updatedTime = updateTime(initialTime);

        // Milliseconds should be incremented by 10
        expect(updatedTime.milliseconds).toBe(510);

        // Seconds and minutes should remain the same
        expect(updatedTime.seconds).toEqual(0);
        expect(updatedTime.minutes).toEqual(0);
    });
});
