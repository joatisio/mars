if [ -a .env ]; then
  set -a
  . ./.env
  set +a
fi
echo "$NEXT_PUBLIC_API_SWAGGER"

# name of swagger services 
ARRAY=( "temp" "temp2")

# loop through services to generate types and interfaces
for element in "${ARRAY[@]}"; do
   npx openapi-typescript "${NEXT_PUBLIC_API_SWAGGER}${element}".json --output types/"${element}".ts
done

# !important : add "yarn run generate:specs && next dev" in package.json scripts to run the generator on start