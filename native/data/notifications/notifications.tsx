export type INotification = {
    id: number;
    title: string;
    message: string;
    read: boolean;
    createdAt: string;
    userId: number;
}

export const notifications: INotification[] = [
    { id: 1, title: 'Notification 1', message: 'This is a notification', read: false, createdAt: '2021-01-01', userId: 0 },
    { id: 2, title: 'Notification 2', message: 'This is another notification', read: false, createdAt: '2021-01-02', userId: 0 },
    { id: 3, title: 'Notification 3', message: 'This is another notification', read: true, createdAt: '2021-01-03', userId: 0 },
    { id: 4, title: 'Notification 4', message: 'This is another notification', read: true, createdAt: '2021-01-04', userId: 0 },
    { id: 5, title: 'Notification 5', message: 'This is another notification', read: true, createdAt: '2021-01-05', userId: 0 },
    { id: 6, title: 'Notification 6', message: 'This is another notification', read: true, createdAt: '2021-01-06', userId: 0 },
    { id: 7, title: 'Notification 7', message: 'This is another notification', read: true, createdAt: '2021-01-07', userId: 0 },
    { id: 8, title: 'Notification 8', message: 'This is another notification', read: true, createdAt: '2021-01-08', userId: 0 },
    { id: 9, title: 'Notification 9', message: 'This is another notification', read: true, createdAt: '2021-01-09', userId: 0 },
    { id: 10, title: 'Notification 10', message: 'This is another notification', read: true, createdAt: '2021-01-10', userId: 0 },
];