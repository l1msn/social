class ProfileCommands {
    static updateProfile(newValue: string) {
        cy.getByTestId('EditableProfileCardHeader.EditButton').click();
        cy.getByTestId('ProfileCard.Username').clear().type(newValue);
        cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
    }

    static resetProfile(profileId: string) {
        return cy.request({
            method: 'PUT',
            url: `http://localhost:8000/profile/${profileId}`,
            headers: { Authorization: 'Authorization' },
            body: {
                id: '2',
                first: 'Alex',
                lastname: 'Sadykov',
                age: 23,
                currency: 'RUB',
                country: 'Russia',
                city: 'Saint-Petersburg',
                username: 'Darlingg',
                avatar: 'https://imgur.com/IyES7O4.png',
            },
        });
    }
}

export default ProfileCommands;
