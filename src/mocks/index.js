const initMockAPI = () => {
  if (typeof window === 'undefined') {
    const { server } = require('./server');
    return server.listen();
  } else {
    const { worker } = require('./browser');
    return worker.start();
  }
};

export default initMockAPI;
