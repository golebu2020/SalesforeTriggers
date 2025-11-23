import { LightningElement } from 'lwc';

export default class HelloConditionalRendering extends LightningElement {
    isVisible = false;

    cardTitle = 'User Profile'
    userProfiles = [
        {
            id: 1,
            firstName: 'Chinedu',
            lastName: 'Olebu',
            initials: 'CO',
            profession: 'Software Engineer',
            fullName: 'Chinedu Olebu',
        },
        {
            id: 2,
            firstName: 'Chika',
            lastName: 'Olebu',
            initials: 'CO',
            profession: 'Real Estate Manager',
            fullName: 'Chika Olebu',
        },
        {
            id: 3,
            firstName: 'Lotanna',
            lastName: 'Bimbo',
            initials: 'LB',
            profession: 'Medical Doctor',
            fullName: 'Lotanna Bimbo',
        },
    ]

    handleClick(){
        this.isVisible = !this.isVisible;
    }
    
}