export const initData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {
                    id: "1",
                    content: "xxxxx",
                    completed: false,
                },
                {
                    id: "2",
                    content: "xxxxx",
                    completed: true,
                },
                {
                    id: "3",
                    content: "xxxxx",
                    completed: false,
                },
            ]);
        }, 2000);
    });
};
