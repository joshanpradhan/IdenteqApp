export const GetTimestampBeforeSomeDay = (days) => {
    const today = new Date();
    return today.getTime() - days * 24 * 60 * 60 * 1000;
};
export const GetTimestampAfterSomeDay = (days) => {
    const today = new Date();
    return today.getTime() + days * 24 * 60 * 60 * 1000;
};
export const GetTimestampToday = () => {
    const today = new Date();
    return today.getTime();
};