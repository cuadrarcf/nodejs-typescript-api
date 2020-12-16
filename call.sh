# CALL FOR API V1
curl --location --request POST 'http://localhost:9909/api/v1/parse' \
--header 'Content-Type: application/json' \
--data-raw '{
    "data": "JOHN0000MICHAEL0009994567"
}
'

# CALL FOR API V2
curl --location --request POST 'http://localhost:9909/api/v2/parse' \
--header 'Content-Type: application/json' \
--data-raw '{
    "data": "JOHN0000MICHAEL0009994567"
}
'

