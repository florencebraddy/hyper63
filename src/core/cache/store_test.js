import { default as test } from 'tape'
import * as store from './store'

const mockService = {
  createStore: (name) =>
    Promise.resolve({
      ok: true,
    }),
  destroyStore: (name) => Promise.resolve({ ok: true }),
  listDocs: (name) => Promise.resolve({ ok: true }),
};

test("create cache store", (t) => {
  t.plan(1);

  function handleError() {
    t.ok(false);
  }
  function handleSuccess() {
    t.ok(true);
  }

  store.create("Hello").runWith(mockService).fork(handleError, handleSuccess);
});

test("destroy cache store", (t) => {
  t.plan(1);

  function handleError() {
    t.ok(false);
  }
  function handleSuccess() {
    t.ok(true);
  }

  store.del("Hello").runWith(mockService).fork(handleError, handleSuccess);
});

test("query cache store", (t) => {
  t.plan(1);

  function handleError() {
    t.ok(false);
  }
  function handleSuccess() {
    t.ok(true);
  }

  store.query("Hello").runWith(mockService).fork(handleError, handleSuccess);
});
