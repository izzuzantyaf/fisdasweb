import { Box, Icon, Heading, Button, Text, Link } from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { PracticumMaterial } from "../core/types/practicum-material.type"

export default function ModuleCard({ data }: { data: PracticumMaterial }) {
  return (
    <Box
      className="module-card"
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
            <FontAwesomeIcon icon={data.faIconName} />
          </Icon>
        </Box>
        <Box className="module-info" overflow="hidden">
          <Heading
            className="module-code"
            textTransform="uppercase"
            fontSize={["18px"]}
            fontWeight="semibold"
          >
            {data.code}
          </Heading>
          <Text
            className="module-name text-gray-400"
            marginTop="6px"
            overflow="hidden"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
          >
            {data.name}
          </Text>
        </Box>
      </Box>
      <Link href={data.preTask.url} isExternal marginTop="16px">
        <Button width="full" size="sm" colorScheme="blue">
          Lihat Soal
        </Button>
      </Link>
    </Box>
  )
}
