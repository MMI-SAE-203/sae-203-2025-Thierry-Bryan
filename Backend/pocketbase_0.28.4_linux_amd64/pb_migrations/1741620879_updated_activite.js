/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4164619532")

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "select1972007657",
    "maxSelect": 1,
    "name": "type_activite",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Atelier",
      "Conférence",
      "Course",
      "Clôture",
      "Soirée"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4164619532")

  // remove field
  collection.fields.removeById("select1972007657")

  return app.save(collection)
})
