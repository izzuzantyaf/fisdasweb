import { Box, Icon, Heading, Button, Text, Link } from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { languageCodeMapper } from "../core/lib/helpers/language-code-mapper.helper"
import { Handout } from "../core/types/handout.type"

export default function HandoutCard({ data }: { data: Handout }) {
  return (
    <Box
      className="handout-card"
      boxShadow="md"
      borderRadius="12px"
      padding="16px"
    >
      <Box display="flex" gap="16px" marginBottom="16px" alignItems="center">
        <Box
          className="bg-blue-200 text-blue-700"
          display="flex"
          flexShrink={0}
          justifyContent="center"
          alignItems="center"
          rounded="full"
          width={["40px", "40px", "48px"]}
          height={["40px", "40px", "48px"]}
        >
          <Icon fontSize={["20px", "20px", "24px"]}>
            <FontAwesomeIcon icon="book" />
          </Icon>
        </Box>
        <Box className="handout-info">
          <Heading
            className="faculty"
            textTransform="capitalize"
            fontSize={["18px"]}
            fontWeight="semibold"
          >
            {data.faculty == "fte"
              ? "Fakultas Teknik Elektro"
              : "Fakultas Rekayasa Industri"}
          </Heading>
          <Text className="lang text-gray-400" marginTop="6px">
            {languageCodeMapper(data.language)}
          </Text>
        </Box>
      </Box>
      <Link href={data.url} isExternal marginTop="16px">
        <Button width="full" size="sm" colorScheme="blue">
          Lihat
        </Button>
      </Link>
    </Box>
  )
}
