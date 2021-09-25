class Beer 
{
    constructor(data)
    {
        this.name = data.name;
        this.id = data.id;
        this.abv = data.abv;
        this.description = data.description;
        this.productionDate = data.first_brewed;
        this.bitterness = data.ibu;
        this.foodPairing = data.food_pairing;
        this.img = data.image_url;
        this.tagLine = data.tagline;
    }
}