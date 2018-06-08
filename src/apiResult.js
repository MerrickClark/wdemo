export const jsonapiResult = JSON.parse(`
{
    "data": [
        {
            "type": "Relationship",
            "id": "fe57d62f-a14f-48e5-a019-5ed827cc16de",
            "attributes": {
                "created": "2018-05-03T16:47:20.698394Z",
                "type_relationship": "customer"
            },
            "relationships": {
                "partner": {
                    "data": {
                        "type": "Company",
                        "id": "90dd1e47-51e5-48c3-97e8-e9a48c05285a"
                    }
                }
            }
        },
        {
            "type": "Relationship",
            "id": "8302bcf5-027f-4e07-9321-a5e420953dc0",
            "attributes": {
                "created": "2018-06-03T16:46:45.761920Z",
                "type_relationship": "vendor"
            },
            "relationships": {
                "partner": {
                    "data": {
                        "type": "Company",
                        "id": "553917d7-9413-44e6-955e-ffd1c1e421f2"
                    }
                }
            }
        },
        {
            "type": "Relationship",
            "id": "e65a1be1-fbff-4b71-a401-e69825d9a131",
            "attributes": {
                "created": "2017-05-23T16:45:56.515745Z",
                "type_relationship": "vendor"
            },
            "relationships": {
                "partner": {
                    "data": {
                        "type": "Company",
                        "id": "5d239f83-0fbe-4762-b6fa-e9ea9f204933"
                    }
                }
            }
        },
        {
            "type": "Relationship",
            "id": "69e26474-01e6-43f7-83e0-58ecf94ca0f9",
            "attributes": {
                "created": "2018-05-23T16:47:56.584772Z",
                "type_relationship": "customer"
            },
            "relationships": {
                "partner": {
                    "data": {
                        "type": "Company",
                        "id": "4818c152-f38a-4fc8-9a30-b2ca76cde4c9"
                    }
                }
            }
        },
        {
            "type": "Relationship",
            "id": "620ef872-23fa-4366-989d-a9265eb07702",
            "attributes": {
                "created": "2018-05-23T16:47:54.802878Z",
                "type_relationship": "vendor"
            },
            "relationships": {
                "partner": {
                    "data": {
                        "type": "Company",
                        "id": "92316626-e6aa-46b0-a432-5c6a8908f4dd"
                    }
                }
            }
        },
        {
            "type": "Relationship",
            "id": "90a15078-1c5b-4840-a843-c498b8852250",
            "attributes": {
                "created": "2018-05-23T16:47:52.278599Z",
                "type_relationship": "vendor"
            },
            "relationships": {
                "partner": {
                    "data": {
                        "type": "Company",
                        "id": "dd8c3668-7054-4f06-bf90-684c68015ed1"
                    }
                }
            }
        },
        {
            "type": "Relationship",
            "id": "8c95cba4-67f8-4244-aa90-56c0d2e04676",
            "attributes": {
                "created": "2018-05-23T16:47:32.501759Z",
                "type_relationship": "customer"
            },
            "relationships": {
                "partner": {
                    "data": {
                        "type": "Company",
                        "id": "2dc3b7f1-808b-4a99-9dba-d184584a3442"
                    }
                }
            }
        },
        {
            "type": "Relationship",
            "id": "4895a99f-9fe9-4d05-9d84-3318cb5c7aac",
            "attributes": {
                "created": "2018-05-23T16:47:13.385092Z",
                "type_relationship": "customer"
            },
            "relationships": {
                "partner": {
                    "data": {
                        "type": "Company",
                        "id": "078d3f21-3ed5-4aad-a8cc-4dd6468f55a0"
                    }
                }
            }
        },
        {
            "type": "Relationship",
            "id": "6a519282-5811-4440-9b36-4bcfe6e8960d",
            "attributes": {
                "created": "2018-05-23T16:47:08.671468Z",
                "type_relationship": "customer"
            },
            "relationships": {
                "partner": {
                    "data": {
                        "type": "Company",
                        "id": "d6938d90-b350-4b5d-931b-1ee4a27a42eb"
                    }
                }
            }
        },
        {
            "type": "Relationship",
            "id": "71206eaa-1f26-479d-90a5-e9dc4bd3cc88",
            "attributes": {
                "created": "2018-05-23T16:47:03.939246Z",
                "type_relationship": "vendor"
            },
            "relationships": {
                "partner": {
                    "data": {
                        "type": "Company",
                        "id": "4a5c6bc8-8f76-4ea7-b935-c8c66059805c"
                    }
                }
            }
        }
    ],
    "included": [
        {
            "type": "Company",
            "id": "078d3f21-3ed5-4aad-a8cc-4dd6468f55a0",
            "attributes": {
                "name": "Petrie McLoud Watson & Associates",
                "pending_invite": true
            },
            "relationships": {
                "members": {
                    "meta": {
                        "count": 1
                    },
                    "data": [
                        {
                            "type": "Member",
                            "id": "25f06686-1edc-4779-8310-aebbe383b139"
                        }
                    ]
                }
            }
        },
        {
            "type": "Company",
            "id": "2dc3b7f1-808b-4a99-9dba-d184584a3442",
            "attributes": {
                "name": "Young Bros Transport",
                "pending_invite": false
            },
            "relationships": {
                "members": {
                    "meta": {
                        "count": 1
                    },
                    "data": [
                        {
                            "type": "Member",
                            "id": "325c9881-8a73-42b7-8112-c39c342e3f53"
                        }
                    ]
                }
            }
        },
        {
            "type": "Company",
            "id": "4818c152-f38a-4fc8-9a30-b2ca76cde4c9",
            "attributes": {
                "name": "Truxton Property Management",
                "pending_invite": false
            },
            "relationships": {
                "members": {
                    "meta": {
                        "count": 1
                    },
                    "data": [
                        {
                            "type": "Member",
                            "id": "8cdfaafc-e5d8-4e62-9d19-188248d55f3a"
                        }
                    ]
                }
            }
        },
        {
            "type": "Company",
            "id": "4a5c6bc8-8f76-4ea7-b935-c8c66059805c",
            "attributes": {
                "name": "Hoyt Productions",
                "pending_invite": true
            },
            "relationships": {
                "members": {
                    "meta": {
                        "count": 1
                    },
                    "data": [
                        {
                            "type": "Member",
                            "id": "61805600-04d8-4c09-9795-d417bcf7ba9e"
                        }
                    ]
                }
            }
        },
        {
            "type": "Company",
            "id": "553917d7-9413-44e6-955e-ffd1c1e421f2",
            "attributes": {
                "name": "Basket Case",
                "pending_invite": false
            },
            "relationships": {
                "members": {
                    "meta": {
                        "count": 1
                    },
                    "data": [
                        {
                            "type": "Member",
                            "id": "a76e97fe-890d-4727-8cdc-de92ef1e54db"
                        }
                    ]
                }
            }
        },
        {
            "type": "Company",
            "id": "5d239f83-0fbe-4762-b6fa-e9ea9f204933",
            "attributes": {
                "name": "ABC Furniture",
                "pending_invite": false
            },
            "relationships": {
                "members": {
                    "meta": {
                        "count": 1
                    },
                    "data": [
                        {
                            "type": "Member",
                            "id": "40ea85df-051f-4102-acfa-ccb0874fea09"
                        }
                    ]
                }
            }
        },
        {
            "type": "Company",
            "id": "90dd1e47-51e5-48c3-97e8-e9a48c05285a",
            "attributes": {
                "name": "Rex Media Group",
                "pending_invite": false
            },
            "relationships": {
                "members": {
                    "meta": {
                        "count": 1
                    },
                    "data": [
                        {
                            "type": "Member",
                            "id": "2f9d9f4e-ac1c-4ab7-8e8a-95b58739ffdc"
                        }
                    ]
                }
            }
        },
        {
            "type": "Company",
            "id": "92316626-e6aa-46b0-a432-5c6a8908f4dd",
            "attributes": {
                "name": "DIISR - Small Business Services",
                "pending_invite": false
            },
            "relationships": {
                "members": {
                    "meta": {
                        "count": 1
                    },
                    "data": [
                        {
                            "type": "Member",
                            "id": "ae1eda3c-6b7c-4f79-9f14-0e2533ac13a7"
                        }
                    ]
                }
            }
        },
        {
            "type": "Company",
            "id": "d6938d90-b350-4b5d-931b-1ee4a27a42eb",
            "attributes": {
                "name": "Hamilton Smith Ltd",
                "pending_invite": true
            },
            "relationships": {
                "members": {
                    "meta": {
                        "count": 1
                    },
                    "data": [
                        {
                            "type": "Member",
                            "id": "814926b0-4bec-44c6-b6c5-c8a3c036e446"
                        }
                    ]
                }
            }
        },
        {
            "type": "Company",
            "id": "dd8c3668-7054-4f06-bf90-684c68015ed1",
            "attributes": {
                "name": "City Limousines",
                "pending_invite": false
            },
            "relationships": {
                "members": {
                    "meta": {
                        "count": 1
                    },
                    "data": [
                        {
                            "type": "Member",
                            "id": "7c558c86-0e31-48e6-aac9-e21aca296a6c"
                        }
                    ]
                }
            }
        },
        {
            "type": "Member",
            "id": "25f06686-1edc-4779-8310-aebbe383b139",
            "attributes": {
                "email": "mm@pmwla.co",
                "first_name": "Morris",
                "last_name": "McKenzie"
            }
        },
        {
            "type": "Member",
            "id": "2f9d9f4e-ac1c-4ab7-8e8a-95b58739ffdc",
            "attributes": {
                "email": "info@rexmedia.co",
                "first_name": "Rex",
                "last_name": "Tiller"
            }
        },
        {
            "type": "Member",
            "id": "325c9881-8a73-42b7-8112-c39c342e3f53",
            "attributes": {
                "email": "rog@ybt.co",
                "first_name": "",
                "last_name": ""
            }
        },
        {
            "type": "Member",
            "id": "40ea85df-051f-4102-acfa-ccb0874fea09",
            "attributes": {
                "email": "info5000@abfl.com",
                "first_name": "Trish",
                "last_name": "Rawlings"
            }
        },
        {
            "type": "Member",
            "id": "61805600-04d8-4c09-9795-d417bcf7ba9e",
            "attributes": {
                "email": "accounts@hoytmadeupdemo.com",
                "first_name": "",
                "last_name": ""
            }
        },
        {
            "type": "Member",
            "id": "7c558c86-0e31-48e6-aac9-e21aca296a6c",
            "attributes": {
                "email": "martyd@citylim.co",
                "first_name": "Martin",
                "last_name": "Dale"
            }
        },
        {
            "type": "Member",
            "id": "814926b0-4bec-44c6-b6c5-c8a3c036e446",
            "attributes": {
                "email": "info@hsg.co",
                "first_name": "",
                "last_name": ""
            }
        },
        {
            "type": "Member",
            "id": "8cdfaafc-e5d8-4e62-9d19-188248d55f3a",
            "attributes": {
                "email": "accounts@truxtonmadeupdemo.com",
                "first_name": "",
                "last_name": ""
            }
        },
        {
            "type": "Member",
            "id": "a76e97fe-890d-4727-8cdc-de92ef1e54db",
            "attributes": {
                "email": "shop5000@basketcase.co",
                "first_name": "Mary",
                "last_name": "Munn"
            }
        },
        {
            "type": "Member",
            "id": "ae1eda3c-6b7c-4f79-9f14-0e2533ac13a7",
            "attributes": {
                "email": "cad@diisr.govt",
                "first_name": "",
                "last_name": ""
            }
        }
    ]
}`)
