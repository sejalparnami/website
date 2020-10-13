import React from "react";
import { Box, Flex, Text, Button, Icon, IconButton } from "@chakra-ui/core";
import { Link } from "react-router-dom";

const MenuItems = ({ children }) => (
    <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
        {children}
    </Text>
);

function Navbar() {
    const [show, setShow] = React.useState(false);
    const handleToggle = () => setShow(!show);

    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            padding="1rem"
            bg="brandDark.400"
            color="white"
            // maxH="150px"
            // height="70px"
        >
            <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
                <Icon name="hamburgerMenu" color="white" size="28px"></Icon>
            </Box>

            <Flex align="center" mr={{ md: "5rem" }}>
                {/* <Icon name="logo" color="brandDark.500"></Icon> */}
                <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.31686 13.7028C8.93449 13.8831 8.52032 13.9848 8.09853 14.0021C4.50399 14.0021 5.18727 9.84076 6.6132 9.7809C7.41526 8.25378 8.3955 6.30817 9.16761 4.60148C9.70215 3.43401 10.5935 2.1765 11.6337 2.02711C12.0066 1.96219 12.3903 2.01452 12.7327 2.17701C13.2677 2.44662 13.1485 2.95567 12.6139 2.68554C12.4662 2.61427 12.3053 2.57481 12.1416 2.5697C11.9779 2.56459 11.8149 2.59394 11.6631 2.65587C10.2966 3.31481 10.5935 5.38013 11.0392 6.45807C11.1345 6.68613 11.2369 6.91176 11.3393 7.13739C11.7478 8.03742 12.1563 8.93734 12.1088 9.99066C12.0494 11.1586 11.158 12.5359 9.99961 13.316L10.2072 13.3462C11.2174 13.4961 12.1362 12.8669 12.8809 11.969C13.7283 10.725 14.4734 9.41335 15.1089 8.0471C15.1225 8.0197 15.1386 7.99632 15.1565 7.97667C15.2183 7.83244 15.2749 7.69842 15.3186 7.59287C15.8831 6.2755 16.21 4.00042 15.4968 3.85052C15.4968 3.85052 16.7151 3.64076 16.9526 3.61108C17.0175 3.60432 17.079 3.59722 17.1372 3.59049C17.8538 3.50772 18.0771 3.48192 18.0222 4.83892C17.9119 6.06956 17.6319 7.27869 17.1902 8.43137C17.2233 8.37697 17.2584 8.31891 17.2955 8.25756C18.2592 6.66463 20.5646 2.85404 22.5076 3.40184C25.3296 4.18101 23.6661 8.97059 21.4975 11.6048C19.8634 13.5806 17.2496 14.5987 15.1399 13.3412L12.318 20.4365C11.724 21.7237 11.3078 22.0532 10.3276 21.9933C9.91831 21.8977 9.4999 21.8474 9.0798 21.8434C9.82246 21.1272 14.8724 11.3946 15.4074 8.67029C15.3683 8.73121 15.3259 8.78742 15.2817 8.83844C14.1654 11.308 12.4092 14.6383 9.31686 13.7028ZM7.89091 13.4936C6.73251 13.4936 6.3462 12.0862 7.29697 11.128C7.29277 11.5722 7.39914 12.0104 7.60638 12.4025C7.81402 12.7954 8.11626 13.1294 8.48536 13.3739C8.299 13.4594 8.09556 13.5003 7.89091 13.4936ZM9.52878 5.07435C9.66386 4.8015 9.79197 4.54271 9.90981 4.30518C9.78681 5.01192 9.92369 6.02167 10.0691 7.09426C10.2011 8.06783 10.3401 9.09318 10.2981 9.99066C10.2093 11.5776 9.64477 12.5952 8.99094 13.1042C8.58134 12.8859 8.24459 12.5509 8.0227 12.1409C7.80081 11.731 7.7036 11.2643 7.7432 10.799C7.77315 9.81058 7.11932 9.84076 7.11932 9.84076C7.72523 8.71761 8.7444 6.65885 9.52878 5.07435ZM19.3583 6.09592C17.8962 8.27804 16.5668 10.5476 15.3775 12.892C16.8334 14.3588 20.0984 11.0354 21.7051 8.07171C23.6661 4.38973 21.8833 2.53366 19.3583 6.09643V6.09592Z"
                        fill="white"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.25604 17.5158C9.50743 17.347 9.71042 17.1146 9.84474 16.8418L9.85185 16.8352C9.85693 16.8237 9.85861 16.8111 9.85666 16.7987C9.8547 16.7863 9.84922 16.7748 9.84087 16.7655C9.83252 16.7563 9.82168 16.7496 9.80965 16.7465C9.79763 16.7433 9.78495 16.7437 9.77317 16.7477L9.76454 16.7508C9.34478 16.9155 8.88792 16.9598 8.4447 16.8787C8.25881 16.8357 8.07975 16.7668 7.9127 16.674C7.8358 16.6331 7.76092 16.5885 7.68831 16.5404C7.68986 16.5292 7.69105 16.518 7.69188 16.5067C7.70067 16.3639 7.65408 16.2232 7.56193 16.1143C7.48977 16.0242 7.39334 15.957 7.28421 15.9207C7.17509 15.8844 7.0579 15.8806 6.94668 15.9097C6.82854 15.9356 6.72064 15.9961 6.63652 16.0836C6.54101 16.185 6.48048 16.3147 6.46393 16.4535C6.45643 16.5167 6.4563 16.5804 6.46348 16.6434C6.28821 16.689 6.1068 16.7079 5.92533 16.6991C5.80861 16.6934 5.69285 16.6749 5.58013 16.6438C5.45982 16.6091 5.33749 16.5702 5.2182 16.5241C5.0039 16.4466 4.79201 16.3565 4.58004 16.2665C4.3165 16.1545 4.05281 16.0424 3.78413 15.9542C3.60464 15.8947 3.42347 15.8433 3.24166 15.7917C3.17821 15.7737 3.11468 15.7557 3.05111 15.7373L2.67902 15.635C2.66579 15.6314 2.653 15.628 2.64038 15.6245C2.58902 15.6106 2.54034 15.5974 2.47597 15.5838C2.47182 15.5827 2.4637 15.5812 2.45561 15.5796C2.44094 15.5769 2.42639 15.5741 2.43588 15.5741C2.43605 15.5727 2.43886 15.5727 2.44128 15.5731C2.44423 15.5738 2.44505 15.5739 2.44473 15.5738C2.4444 15.5736 2.44294 15.5733 2.44128 15.5731C2.43895 15.5725 2.43527 15.5715 2.42977 15.57L2.32166 15.5408C2.03086 15.4653 1.73089 15.4319 1.43076 15.4416C1.25318 15.448 1.07712 15.4772 0.906878 15.5286C0.801091 15.5618 0.699013 15.606 0.602296 15.6606C0.547564 15.6943 0.494702 15.731 0.443925 15.7705C0.401296 15.8079 0.360635 15.8476 0.322098 15.8892C0.159676 16.064 0.0525754 16.2836 0.0144643 16.52C-0.0170794 16.7278 0.00315545 16.9402 0.0733481 17.1381C0.109327 17.2479 0.162083 17.3515 0.229706 17.445C0.284755 17.5179 0.347563 17.5844 0.417016 17.6435C0.575819 17.7923 0.778468 17.8848 0.994189 17.907L0.951556 17.8968C1.06738 17.9099 1.18447 17.9063 1.29928 17.886C1.41875 17.868 1.53279 17.8236 1.6333 17.7561C1.65143 17.7419 1.67002 17.7278 1.6892 17.7133C1.73985 17.6751 1.79466 17.6337 1.85615 17.578C1.89892 17.5408 1.93362 17.4951 1.95808 17.4438C1.98254 17.3925 1.99622 17.3367 1.99828 17.2798C1.99836 17.2666 1.99444 17.2536 1.98704 17.2427C1.97964 17.2318 1.96912 17.2234 1.95687 17.2187C1.94463 17.214 1.93125 17.2131 1.91852 17.2163C1.90578 17.2194 1.8943 17.2264 1.8856 17.2363C1.86432 17.2624 1.83761 17.2835 1.80735 17.2981C1.77708 17.3127 1.74401 17.3204 1.71046 17.3207C1.69623 17.3217 1.68069 17.3227 1.66414 17.3237C1.6069 17.3274 1.53751 17.3318 1.46782 17.3417C1.41227 17.3376 1.35792 17.3233 1.3074 17.2997C1.25244 17.2805 1.201 17.2523 1.15512 17.2163L1.11247 17.2061C1.10144 17.1586 1.08439 17.1126 1.06172 17.0695C1.05019 17.04 1.03943 17.0058 1.02944 16.9741C1.028 16.9695 1.02657 16.965 1.02516 16.9605C1.01856 16.9411 1.01857 16.9262 1.02872 16.9329C1.03145 16.9335 1.03392 16.9349 1.03582 16.937V16.9155C1.03843 16.865 1.05613 16.8165 1.08658 16.7763C1.10303 16.7601 1.11538 16.7585 1.12894 16.7567C1.13506 16.7559 1.14142 16.755 1.14852 16.7528C1.15573 16.7512 1.16284 16.7491 1.16983 16.7467C1.17071 16.7479 1.17118 16.7495 1.17118 16.751C1.17118 16.7526 1.17071 16.7541 1.16983 16.7554C1.18669 16.7575 1.20375 16.7575 1.2206 16.7554C1.29593 16.7498 1.37149 16.7481 1.447 16.7503C1.65258 16.7591 1.85759 16.7784 2.06124 16.8081L2.13789 16.8193L2.22469 16.8342L2.278 16.8403L2.44856 16.8567L2.82115 16.8971C2.88337 16.9039 2.94552 16.911 3.00769 16.9181C3.1961 16.9397 3.38466 16.9612 3.57551 16.9759C3.84989 16.9978 4.12964 16.9974 4.40918 16.9971C4.64526 16.9968 4.8812 16.9965 5.11363 17.0096C5.24054 17.0148 5.36694 17.026 5.49435 17.0424C5.63192 17.0567 5.76694 17.068 5.90045 17.0715C6.14337 17.079 6.38337 17.0784 6.62763 17.0756C6.63589 17.0872 6.64444 17.0987 6.65327 17.1099C6.69671 17.1631 6.74461 17.2124 6.79643 17.2573L6.88272 17.3273C6.9418 17.3735 7.00332 17.4163 7.06699 17.4558C7.19795 17.5358 7.33552 17.6042 7.47817 17.6604C7.77496 17.778 8.09412 17.8271 8.41221 17.8042C8.71367 17.7841 9.00465 17.6847 9.25604 17.5158ZM6.88932 16.4749C6.92472 16.3329 6.96064 16.3756 6.94719 16.3957C6.94756 16.4001 6.94327 16.4084 6.94022 16.4143C6.939 16.4166 6.93798 16.4186 6.93754 16.4198C6.93602 16.4239 6.93246 16.432 6.93246 16.432C6.94068 16.4273 6.94936 16.4233 6.95836 16.4203C6.96932 16.4159 6.98126 16.4147 6.99288 16.4167C6.99354 16.419 6.98398 16.4241 6.97441 16.4292C6.96919 16.432 6.96397 16.4348 6.96039 16.4372C6.93688 16.4501 6.91318 16.4626 6.88932 16.4749Z"
                        fill="white"
                    />
                </svg>
            </Flex>

            <Box
                display={{ xs: show ? "block" : "none", md: "flex" }}
                mb={{ base: 2, md: 0 }}
                width={{ xs: "full", md: "auto" }}
                alignItems="center"
                flexGrow={1}
            >
                <MenuItems>
                    <Link to="/">Menu</Link>
                </MenuItems>
                <MenuItems>
                    <Link to="/ourStory">Our Story</Link>
                </MenuItems>
                <MenuItems>
                    <Link to="/workshops">Workshops</Link>
                </MenuItems>
                <MenuItems>
                    <Link to="/contactUs">Contact US</Link>
                </MenuItems>
            </Box>
            <Box>
                <Link to="/cart">
                    {show ? (
                        <Button leftIcon="cart" bg="transparent">
                            Cart
                        </Button>
                    ) : (
                        <IconButton
                            aria-label="Cart"
                            icon="cart"
                            variantColor="brandDark"
                            fontSize="26px"
                        />
                    )}
                </Link>
            </Box>
        </Flex>
    );
}

export default Navbar;
