import { NavigationBase } from "./../NavigationBase";
import { DashboardPageObject } from './DashboardPageObject'; // Adjust the import path as needed

export class DashboardPage extends NavigationBase {

    async navigateMenuByText(menuName: string) {
        await this.click(DashboardPageObject.generateMenuCard(menuName));
    } 


}