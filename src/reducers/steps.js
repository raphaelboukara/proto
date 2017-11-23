import Steps from './../components/Steps';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, { type, payload = {} } = {}) => {
    switch (type) {
        case Steps.actions.INIT_STEP:
        {
            const { index } = payload;
            return { ...state, [index]: {
                id: index,
                status: Steps.constants.STATUS_DEFAULT
            }};
        }

        case Steps.actions.VALIDATE_STEP:
        {
            const { index, status } = payload;
            return { ...state, [index]: { ...state[index], status }};
        }

        default:
            return state;
    }
};
