export class DashboardPageObject {
    
    static generateMenuCard(text: string) {
        return `//h5[text()='${text}']`
    }
}