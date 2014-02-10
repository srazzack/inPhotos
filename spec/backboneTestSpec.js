describe("Backbone Model and collection Test", function () {
    describe("create collection", function () {
        it("should confirm models inside collection", function () {
            var myPhotoCollection = new CardsCollection();
            var myCard = new Card();
            myPhotoCollection.set([myCard]);
            expect(myPhotoCollection.get(myCard)).toEqual(myCard);
        });

        it("model Card should return a comment", function () {
            var myCard = new Card();
             myCard.set("caption", "Here we go!"});
            expect(myCard.get(caption)).toEqual("here we go!");
        });
    });
    
    describe("tests for errors", function () {
        it("upon initialization without title, validation should throw error", function () {
            console.log('error must be thrown');
        });
    });
});
