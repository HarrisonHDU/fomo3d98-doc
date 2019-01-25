define({ "api": [
  {
    "type": "get",
    "url": "/",
    "title": "错误码",
    "name": "ErrorCode",
    "group": "Constant",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "10000",
            "description": "<p>成功</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "10007",
            "description": "<p>未登录</p>"
          }
        ]
      }
    },
    "filename": "api/apidoc.py",
    "groupTitle": "Constant"
  },
  {
    "type": "get",
    "url": "/game/last_winner/rounds/{round_id:int}/buy_key_records",
    "title": "key购买记录",
    "name": "BuyKeyList",
    "group": "LastWinner",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "self",
            "defaultValue": "0",
            "description": "<p>是否仅显示当前用户,0否1是</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "pageNumber",
            "description": "<p>第几页,从1开始</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页数量</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"user_name\": \"用户昵称\",\n    \"eth\": 1.33,\n    \"buy_time\": \"2019-01-12 13:33:23\"\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "api/last_winner.py",
    "groupTitle": "LastWinner"
  },
  {
    "type": "get",
    "url": "/",
    "title": "非分页返回的结构",
    "name": "NormalStructure",
    "group": "Structure",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"msg\": \"服务正常\",\n    \"status\": 10000,\n    \"result\": {}/[]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/apidoc.py",
    "groupTitle": "Structure"
  },
  {
    "type": "get",
    "url": "/",
    "title": "分页返回的结构",
    "name": "PageStructure",
    "group": "Structure",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"msg\": \"服务正常\",\n    \"status\": 10000,\n    \"result\": {\n        \"totalCount\": 0,\n        \"data\": []\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/apidoc.py",
    "groupTitle": "Structure"
  }
] });
