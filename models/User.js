class User {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    static createUser(name) {
            return {
                id: Date.now(),
                name: name
            }
        }
}

export default User;
