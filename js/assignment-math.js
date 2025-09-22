function areaCircle(radius){
    return Math.PI * radius * radius;
}
function randomPassword(length){
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*_+-=;:,.?/~';
    let password = '';
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
}
function salesTax(price, tax){
    price = price * 100;
    tax = tax * 100;
    return (100/(price + price * tax)).toFixed(2);
}