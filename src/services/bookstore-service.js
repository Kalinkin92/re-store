export default class BookstoreService {

    getBooks() {

        const data = [
            {
                id: 1,
                title: 'Production-ready microservices',
                author: 'Amy Farawler',
                price: 99.99,
                coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDt98VMtOkxvRSJr6iAYQWdbGTGLFguYXxhjXmjdowmxsrDaQt"
            },
            {
                id: 2,
                title: 'Realease IT',
                author: 'John Maccain',
                price: 24.99,
                coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR2xD1ymXjzFE5ojbtcdcvpjMKS7ekg55bGCGZ4ZX4fyjaPGjAyQ"
            }
        ];

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.75) {
                    reject(new Error('Something bad happenend'))
                }
                resolve(data)
            }, 700)
        })
    }
}