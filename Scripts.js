function order(product, price) {
    let phone = "50946833696; // 👉 Mets ton numéro WhatsApp ici
    let message = `Hello Bilou Digital,%0A
I want to order:%0A
Product: ${product}%0A
Price: ${price}%0A
Payment method?`;

    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
}
