import { styled } from "@mui/system";

const BlockModal = styled("div")({
  display: "flex",
  flexDirection: "column",
  position: "fixed",
  top: "50%",
  left: "17%",
  background: "#081A2C",
  alignItems: "center",
  width: "300px",
  height: "200px",
  justifyContent: "space-between",
  borderRadius: "30px",
  textAlign: "center",
});

const BlockModalHeader = styled("span")({
  fontWeight: "500",
  fontSize: "15px",
  lineHeight: "21px",
  color: "#FFFFFF",
});

const BlockModalContent = styled("div")({
  width: "300px",
  background: "#081A2C",
});

const BlockModalFooter = styled("div")({
  width: "300px",
  background: "#081A2C",
  display: "flex",
  justifyContent: "space-between",
});

const BlockModalLineViewButton = styled("button")({
  width: "25.5%",
  padding: "7px",
  borderRadius: "5px",
  background: "#073374",
  color: "#FFFFFF",
  cursor: "pointer",
  border: "none",
  margin: "10px 10px",
});

type Props = {
  dataWindow: boolean;
  setDataWindow: (state: boolean) => void;
};

export const SalesGraphModal = (props: Props) => {
  const { dataWindow, setDataWindow } = props;

  const handleClose: React.MouseEventHandler<HTMLButtonElement> = (): void => {
    setDataWindow(false);
  };

  if (!dataWindow) {
    return null;
  }
  return (
    <>
      <BlockModal>
        <BlockModalContent>
          <BlockModalHeader>Choose date</BlockModalHeader>
        </BlockModalContent>
        <BlockModalFooter>
          <BlockModalLineViewButton onClick={handleClose}>
            Done
          </BlockModalLineViewButton>
          <BlockModalLineViewButton onClick={handleClose}>
            Cancel
          </BlockModalLineViewButton>
        </BlockModalFooter>
      </BlockModal>
    </>
  );
};
