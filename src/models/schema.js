export const schema = {
    "models": {
        "Productivity": {
            "name": "Productivity",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "EVENTDTM": {
                    "name": "EVENTDTM",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "EMPLOYEE_BARCODE": {
                    "name": "EMPLOYEE_BARCODE",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "EMPLOYEE_LOGIN": {
                    "name": "EMPLOYEE_LOGIN",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "FULL_COST_CODE": {
                    "name": "FULL_COST_CODE",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "COST_CODE_LEVEL_1": {
                    "name": "COST_CODE_LEVEL_1",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "COST_CODE_LEVEL_2": {
                    "name": "COST_CODE_LEVEL_2",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "COST_CODE_LEVEL_3": {
                    "name": "COST_CODE_LEVEL_3",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "COST_CODE_LEVEL_4": {
                    "name": "COST_CODE_LEVEL_4",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "TIME_IN_LOCAL_TIMEZONE": {
                    "name": "TIME_IN_LOCAL_TIMEZONE",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "TIME_OUT_LOCAL_TIMEZONE": {
                    "name": "TIME_OUT_LOCAL_TIMEZONE",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Productivities",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "userPools",
                                "ownerField": "owner",
                                "allow": "owner",
                                "identityClaim": "cognito:username",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Roster": {
            "name": "Roster",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "EMPLOYEE_LOGIN": {
                    "name": "EMPLOYEE_LOGIN",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "EMPLOYEE_BARCODE": {
                    "name": "EMPLOYEE_BARCODE",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "COST_CENTER": {
                    "name": "COST_CENTER",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "FCLM_AREA_CODE": {
                    "name": "FCLM_AREA_CODE",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "SITE": {
                    "name": "SITE",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "TYPE": {
                    "name": "TYPE",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Rosters",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        },
        "Top3": {
            "name": "Top3",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "FIRST_MOST": {
                    "name": "FIRST_MOST",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "SECOND_MOST": {
                    "name": "SECOND_MOST",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "THIRD_MOST": {
                    "name": "THIRD_MOST",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Top3s",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        },
        "CostCodeRollup": {
            "name": "CostCodeRollup",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "FULL_COST_CODE": {
                    "name": "FULL_COST_CODE",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "COST_CODE_LEVEL_1": {
                    "name": "COST_CODE_LEVEL_1",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "COST_CODE_LEVEL_2": {
                    "name": "COST_CODE_LEVEL_2",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "COST_CODE_LEVEL_3": {
                    "name": "COST_CODE_LEVEL_3",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "COST_CODE_LEVEL_4": {
                    "name": "COST_CODE_LEVEL_4",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "COST_CODE_LEVEL_5": {
                    "name": "COST_CODE_LEVEL_5",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "CostCodeRollups",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        }
    },
    "enums": {},
    "nonModels": {},
    "version": "3d2c2d2ef1222825da4e4fe834b384b5"
};