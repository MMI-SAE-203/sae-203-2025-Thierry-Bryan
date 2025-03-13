/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1509384039")

  // remove field
  collection.fields.removeById("text3017671959")

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "date3017671959",
    "max": "",
    "min": "",
    "name": "programme_date",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1509384039")

  // add field
  collection.fields.addAt(2, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3017671959",
    "max": 0,
    "min": 0,
    "name": "programme_date",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // remove field
  collection.fields.removeById("date3017671959")

  return app.save(collection)
})
