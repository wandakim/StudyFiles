    /**
     * Obtional Chaining
     */

    const person1 = {
        name: 'Wanda',
        job: {
            title: 'S/W Engineer',
            manager: {
                name: 'Bob',
            }
        },
    };

    // bad bad
    {
        function printManager(person) {
            console.log(person.job.manager.name);
        }
        printManager(person1);
        // printManager(person2); -> Error

    }

    // bad

    {
        
    }