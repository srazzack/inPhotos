var Card = Backbone.Model.extend({

    defaults: {
        caption: "", //attributes.caption.text,
        comments: "", // attributes.comments.data,
        image: "", // attributes.images.standard_resolution,
        src: "", //attributes.link,
        author: "" // {name: full_name, username: username, profile_picture: profile_picture}
    },

    initalize: function () {
        console.log(this);
    },

    validate: function () {
        //no validation since source of models is dependant on an external object
    }
});