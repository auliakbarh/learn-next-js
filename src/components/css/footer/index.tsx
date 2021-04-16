import React from "react";

import {
    PankodIcon,
    GithubIcon,
    TwitterIcon,
    YoutubeIcon,
    LinkedinIcon,
} from "@components/icons";
import styles from "./index.module.css";

export const Footer: React.FC = () => {
    return (
        <div className={styles.footer}>
            <a href="https://github.com/pankod" target="_blank">
                <PankodIcon
                    data-test="icon"
                    color="white"
                    width="140"
                    height="28"
                />
            </a>
            <div className={styles.icons}>
                <a href="https://github.com/pankod" target="_blank">
                    <GithubIcon
                        data-test="icon"
                        color="white"
                        width="28"
                        height="29"
                    />
                </a>
                <a href="https://twitter.com/PankodDev" target="_blank">
                    <TwitterIcon
                        data-test="icon"
                        color="white"
                        width="28"
                        height="28"
                    />
                </a>
                <a
                    href="https://www.youtube.com/channel/UCBGOeQkv1XW3ptryLWlQbAQ"
                    target="_blank"
                >
                    <YoutubeIcon
                        data-test="icon"
                        color="white"
                        width="28"
                        height="29"
                    />
                </a>
                <a
                    href="https://www.linkedin.com/company/pankod-yazilim-ve-danismanlik/"
                    target="_blank"
                >
                    <LinkedinIcon
                        data-test="icon"
                        color="white"
                        width="28"
                        height="32"
                    />
                </a>
            </div>
        </div>
    );
};
