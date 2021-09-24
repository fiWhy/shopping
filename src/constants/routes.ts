export const dashboardPath = '/';
export const productPath = '/product/:id';

export const getDashboardPath = () => dashboardPath;
export const getProductPath = (id: string) => productPath.replace(':id', id);
