import { put } from 'redux-saga/effects';
import ACTION from '../actions/actionTypes';
import history from '../browserHistory';
import React from 'react';
import * as restController from '../api/rest/restController';


export function* loginSaga(action) {
  yield put({ type: ACTION.AUTH_ACTION_REQUEST });
  try {
    yield  restController.loginRequest(action.data);
    history.replace('/');
    yield  put({ type: ACTION.AUTH_ACTION_SUCCESS });
  } catch (err) {
    yield  put({ type: ACTION.AUTH_ACTION_ERROR, error: err.response });
  }
}

export function* registerSaga(action) {
  yield put({ type: ACTION.AUTH_ACTION_REQUEST });
  try {
    yield  restController.registerRequest(action.data);
    history.replace('/');
    yield put({ type: ACTION.AUTH_ACTION_SUCCESS });
  } catch (e) {
    yield put({ type: ACTION.AUTH_ACTION_ERROR, error: e.response });
  }
}

export function* updateUserPassword(action) {
    try {
        const { data } = yield restController.updatePassword(action);
        yield put({ type: ACTION.UPDATE_PASSWORD_SUCCESS, data });
    } catch (error) {
        yield put({ type: ACTION.UPDATE_PASSWORD_ERROR, error: error.response });
    }
}

export function* recoverPassword(action) {
  try {
    const { data } = yield restController.recoverPassword(action);
    yield put({ type: ACTION.RECOVER_PASSWORD_SUCCESS, data });
  } catch (error) {
    yield put({
      type: ACTION.UPDATE_PASSWORD_ERROR,
      error: error.response || { response: { data: 'Can not connect to server', status: 400 } },
    });
  }
}

