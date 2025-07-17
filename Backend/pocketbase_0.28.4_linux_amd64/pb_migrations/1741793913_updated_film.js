/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2773080466")

  // add field
  collection.fields.addAt(11, new Field({
    "hidden": false,
    "id": "select1069873058",
    "maxSelect": 1,
    "name": "salle_film",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Salle 1",
      "Salle 2"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2773080466")

  // remove field
  collection.fields.removeById("select1069873058")

  return app.save(collection)
})
