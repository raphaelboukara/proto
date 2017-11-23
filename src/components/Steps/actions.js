export const INIT_STEP = '__STEPS__ACTION@INIT_STEP';
export const initStep = (index) => ({
    type: INIT_STEP,
    payload: { index }
});

export const VALIDATE_STEP = '__STEPS__ACTION@VALIDATE_STEP';
export const validateStep = (index, status) => ({
    type: VALIDATE_STEP,
    payload: { index, status }
});
