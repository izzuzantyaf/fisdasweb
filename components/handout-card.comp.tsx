import { Box, Icon, Heading, Button, Text, Link } from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { languageCodeMapper } from "../core/lib/helpers/language-code-mapper.helper"
import { Handout } from "../core/types/handout.type"
import MyIcon from "./my-icon.comp"

export default function HandoutCard({ data }: { data: Handout }) {
  return (
    <Box
      className="handout-card"
      boxShadow="md"
      borderRadius="12px"
      padding="16px"
    >
      <Box display="flex" gap="16px" marginBottom="16px" alignItems="center">
        <MyIcon faIconName="book" />
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
        <Button width="full" colorScheme="blue">
          Lihat Modul
        </Button>
      </Link>
    </Box>
  )
}
