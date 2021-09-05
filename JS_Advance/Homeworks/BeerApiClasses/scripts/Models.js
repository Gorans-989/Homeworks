class Beer 
{
    constructor(data)
    {
        this.name = data.name;
        this.id = data.id;
        this.abv = data.abv;
        this.description = data.description;
        this.productionDate = data.firstBrewed;
        this.bitterness = data.ibu;
        this.foodParing = data.food_paring;
        this.img = data.image_url;
        this.tagLine = data.tagline;
    }
}