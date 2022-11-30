import { REQUEST_STATUSES } from './constants.js'
/**
 * Creates 3 three addCases for query handling
 * @param {Object} builder
 * @param {Function} thunk
 * @param {Object} fields { status: string, data: string, error: string }
 * @param {Object} options { concat: true }
 */


export const addQueryCases = (
  builder,
  thunk,
  { status, data, error },
  options = { concat: true }
) => {
  builder
    .addCase(thunk.pending, state => {
      state[status] = REQUEST_STATUSES.REQUESTED
    })
    .addCase(thunk.fulfilled, (state, { payload }) => {
      state[status] = REQUEST_STATUSES.SUCCEEDED
      if (options.concat) {
        state[data] = state[data].concat(payload.results)
      } else {
        state[data] = payload
      }
    })
    .addCase(thunk.rejected, (state, action) => {
      state[status] = REQUEST_STATUSES.FAILED
      state[error] = action.error
    })
}
