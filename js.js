db.collection("CSV").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        console.log("Document ID: ", doc.id, "Data: ", doc.data());
    });
});

