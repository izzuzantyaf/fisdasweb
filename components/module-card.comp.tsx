import { Box, Heading, Button, Text, Link } from "@chakra-ui/react"
import { PracticumMaterial } from "../core/types/practicum-material.type"
import MyIcon from "./my-icon.comp"

export default function ModuleCard({ data }: { data: PracticumMaterial }) {
  return (
    <Box
      className="module-card"
      boxShadow="md"
      borderRadius="12px"
      padding="16px"
    >
      <Box display="flex" gap="16px" marginBottom="16px" alignItems="center">
        <MyIcon faIconName={data.faIconName} />
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
        <Button width="full" colorScheme="blue">
          Lihat Soal
        </Button>
      </Link>
    </Box>
  )
}
