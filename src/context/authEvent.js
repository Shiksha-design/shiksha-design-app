const listeners = new Set();

export default {
  subscribe(cb) {
    listeners.add(cb);
    return () => listeners.delete(cb);
  },
  emit(payload) {
    listeners.forEach((cb) => {
      try { cb(payload); } catch (e) { /* ignore listener errors */ }
    });
  }
};
