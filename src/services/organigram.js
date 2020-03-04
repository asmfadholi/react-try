import api from './api';

export default {
  getOrganigramList(req) {
    const apis = api.generateApi();
    return apis.get('order/list', req)
      .then(res => res.data);
  },
};
