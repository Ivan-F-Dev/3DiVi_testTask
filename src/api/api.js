import axios from "axios";

const instance = axios.create({
    baseURL: 'https://analytics.3divi.ru/api/v2/statistics/user/2088/devices/dates/ages/?key=d3aa35bde5ef46899b91aca9c66e174e&b=2020/03/08%2012:00:00&e=2020/09/08%2012:00:00&tzo=0',
    //baseURL: 'https://analytics.3divi.ru/api/v2/statistics/user/2088/devices/dates/ages/?key=d3aa35bde5ef46899b91aca9c66e174e&b=2020/01/01%2012:00:00&e=2020/06/01%2012:00:00&tzo=0',
    //baseURL: 'https://analytics.3divi.ru/api/v2/statistics/user/2088/devices/dates/ages/?key=d3aa35bde5ef46899b91aca9c66e174e&b=2020/03/06%2012:00:00&e=2020/07/06%2012:00:00&tzo=0',
    //baseURL: 'https://analytics.3divi.ru/api/v2/statistics/user/2088/devices/dates/ages/?key=d3aa35bde5ef46899b91aca9c66e174e&b=2020/06/06%2012:00:00&e=2020/12/06%2012:00:00&tzo=0',
    //baseURL: 'https://analytics.3divi.ru/api/v2/statistics/user/2088/devices/dates/ages/?key=d3aa35bde5ef46899b91aca9c66e174e&b=2020/11/06%2012:00:00&e=2021/04/06%2012:00:00&tzo=0',
});

export const API = {
    getData() {
        return instance.get()
            .then(response => response.data)
    },
}
