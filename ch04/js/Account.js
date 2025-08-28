// 클래스 정의
class Account {
    
    constructor(bank, id, name, balane) {
        this.bank = bank; // 속성 선언
        this.id = id;
        this.name = name;
        this.balane = balane;
    }

    deposit(money) {
        this.balane += money;
    }

    withdraw(money) {
        this.balane -= money;
    }

    show() {
        document.write('<p>');
        document.write('은행 : ' + this.bank + '<br>');
        document.write('계좌번호 : ' + this.id + '<br>');
        document.write('입금주 : ' + this.name + '<br>');
        document.write('현재잔액 : ' + this.balane + '<br>');
        document.write('</p>');
    }
}