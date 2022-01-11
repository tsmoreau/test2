import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { abi, contractAddress } from "../config";
import Image from "next/image";
import yggdrasil from "/assets/yggdrasil.png";
import logo from "/assets/logo.png";

import styles from "../styles/Index.module.css";
import Head from "next/head";

const Index = () => {
  const [userAddr, setUserAddr] = useState("");

  let user;
  let addr;

  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    window.ethereum
      .enable()
      .then((provider = new ethers.providers.Web3Provider(window.ethereum)));
    const signer = provider.getSigner();

    addr = signer
      .getAddress()
      .then((res) => console.log("userAddr:", res))
      .then((res) => (user = res));
  }, []);

  const connectWallet = () => console.log("Hello!");

  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/public/yggdrasil.ico" />
      </Head>

      <div className={styles.main}>
        {/* //! TOKEN RIGHT SIDE SHIT */}

        <div className={styles.rightGrid}>
          <div className={styles.imageWrapper}>
            <Image
              className={styles.NFT}
              src={yggdrasil}
              layout="responsive"
            ></Image>
          </div>
          <h1>∞. YGGDRASIL</h1>
          <p>
            In Norse mythology, Yggdrasil is the massive tree whose roots and
            branches stretch through the nine realms of time and space. The
            concept of a great tree on whose body rests the world, though,
            transcends any culture, and the four-dimensional structure of
            spacetime evokes a similar metaphor. We are the fruit of the tree of
            time, and as we are born we become its stewards. In this token we
            see the image of a tree appearing in front of metatron'’'s cube, a
            sacred geometric design which contains schematic information for all
            of the platonic solids, those mathematically perfect shapes that
            were once theorized to be the building blocks of reality. Yggdrasil
            is the icon of cosmic unity; the blend between the divine feminine
            chaos of nature, and the divine masculine order of math.
          </p>
        </div>

        {/* //TODO LEFT SIDE SCROLLER SHIT */}
        <div className={styles.scroller}>
          <div className={styles.containerParent}>
            <nav
              className={styles.header}
              style={{ borderBottom: "3px solid var(--purple)" }}
            >
              <div className={styles.logo}>
                <Image layout="intrinsic" src={logo}></Image>
              </div>

              {user ? (
                <button className={styles.connectBtn}>
                  <h1>{addr} | V</h1>
                </button>
              ) : (
                <button className={styles.connectBtn} onClick={connectWallet}>
                  <h1>Connect Your Wallet</h1>
                </button>
              )}
            </nav>

            <div className={styles.containerChild}>
              {/* //? LEFT */}
              <div className={styles.leftGrid}>
                <p style={{ marginTop: "10%" }}>
                  <em>"What is this place?"</em> Roxas asks, gazing up into the
                  branches of the pale tree.
                </p>
                <br />
                <p>
                  <em>"It is the place beyond the place,"</em> the fox replies,
                  <em> "The time from which all times begin."</em>
                </p>
                <br />
                <p>
                  As a token of our gratitude, every verified backer of the 2020
                  Anthromancer kickstarter campaign is eligible to claim a
                  single limited edition <em>“Yggdrasil”</em> NFT, secured on
                  the Ethereum blockchain for all time. These ERC-1155 tokens
                  will enable the holder to participate in secret experiences,
                  grant special access to playtesting and live events, and
                  unlock discounts on future NFT drops and gaming applications,
                  for the life of the Anthromancer brand. Gas for claiming has
                  been prepaid, and the secret codes distributed via email will
                  not expire. We are moved by your support, and are grateful for
                  the opportunity to repay you in some small way.
                </p>

                <p>Thank you.</p>

                <h2 className={styles.h2}>HOW TO GET STARTED</h2>
                <div className={styles.videoWrapper}>
                  <iframe
                    className={styles.videoplayer}
                    src="https://www.youtube.com/embed/tgbNymZ7vqY"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.containerParent}>
            <nav className={styles.header}></nav>

            <div className={styles.containerChild}>
              {/* //? LEFT */}
              <div className={styles.leftGrid}>
                <h1 className={styles.title}>The Steps Applied</h1>
                <hr className={styles.divider} />
                <ol>
                  <li>
                    <h4>Set Up your Metamask</h4>
                    <p>
                      Download and install the Metamask browser extension. You
                      can do so by navigating to the metamask website and
                      following the instructions from{" "}
                      <a href="#" className={styles.link}>
                        this ONE37pm article here
                      </a>
                      . After you set up your metamask wallet and open the
                      extension, you will be prompted to choose a password and
                      to write down a list of words called a 'seed phrase'.
                      Write these words down on a piece of paper and store it
                      somewhere safe and secure. Don't store your seed phrase in
                      a file on your computer, because if someone can hack your
                      computer, they could find this file and use it to steal
                      the contents of your wallet.
                    </p>
                  </li>
                  <li>
                    <h4>Connect to this Site</h4>
                    <p>
                      When you wallet is set up, connect it to our website using
                      the 'connect wallet' button (top right).
                    </p>
                  </li>
                  <li>
                    <h4>Claim your NFT</h4>
                    <p>
                      Click 'Claim Your NFT', and sign the transaction using
                      your metamask wallet. The token will be automatically
                      transferred into your account. It may take up to 10
                      minutes for this transaction to be fully confirmed; if you
                      don't see it immediately, wait for a few minutes. Once the
                      token has transferred, you ought to be able to look at
                      your account on{" "}
                      <a className={styles.link} href="https://opensea.io">
                        Opensea.io
                      </a>{" "}
                      or{" "}
                      <a className={styles.link} href="https://etherscan.io">
                        Etherscan.io
                      </a>{" "}
                      and see the token on display. If you have any technical
                      difficulties with this process, reach out to us and we'll
                      see if we can help.
                    </p>
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <div className={styles.containerParent}>
            <nav className={styles.header}></nav>

            <div className={styles.containerChild}>
              {/* //? LEFT */}
              <div className={styles.leftGrid}>
                <h1 className={styles.title}>CONGRATULATIONS!</h1>
                <h1 className={styles.subTitle}>NOW WHAT?</h1>
                <hr className={styles.divider} />
                <p>
                  Now that you hold an Anthromancer NFT, you will be eligible to
                  receive discounts on future Anthromancer NFT drops, early
                  access to beta testing for chain-based games and apps we
                  develop, and access to a special community of dedicated fans
                  and builders organized via our community discord server. All
                  you have to do is protect your wallet and seed phrase, and
                  keep the token safe within it.
                  <br />
                  <br />
                  You are also free to sell your token on a marketplace such as{" "}
                  <a className={styles.link} href="https://opensea.io">
                    Opensea.io
                  </a>
                  , to trade it for other tokens via a service such as sudoswap,
                  to display it in a virtual gallery such as{" "}
                  <a className={styles.link} href="oncyber.io">
                    OnCyber.io
                  </a>{" "}
                  to build applications that use it and increase its perceived
                  utility, or to hold it and forget you even have it until it
                  becomes useful to you down the road. We intend to develop all
                  of our future games and applications so that holders of these
                  early tokens are given special consideration and novel powers
                  in Anthromancer experiences. If you believe in us, we will
                  find ways to reward you for that belief. This token is our
                  opportunity to deliver value to those who believed in us from
                  the outset, and we find great joy in knowing we can express
                  our gratitude to you, forever, thanks to the mechanism of
                  tokenized assets. Thank you for playing along; we look forward
                  to the next time we can play together.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.containerParent}>
            <nav className={styles.header}></nav>

            <div className={styles.containerChild}>
              {/* //? LEFT */}
              <div className={styles.leftGrid}>
                <h1 className={styles.title}>What's Next for Anthromancer</h1>
                <hr className={styles.divider} />
                <p>
                  In the following months and years Anthromancer will release a
                  series of NFT projects which will connect a strong community
                  of friends, fans, gamers and builders. By incentivizing the
                  creation of this community via value-sharing and giveaways, we
                  hope to spark a self-sustaining energy that will carry this
                  brand and the products associated with it to widespread
                  adoption, and through that adoption, change the world. If
                  you'’'d like to know more about our mid- and long-term vision,
                  we invite you to take a look at our Road Map.
                </p>
                <br />
                <br />
                <p>This is Anthromancer. Be Moved.</p>

                <div className={styles.videoWrapper}>
                  <iframe
                    className={styles.videoplayer}
                    src="https://www.youtube.com/embed/tgbNymZ7vqY"
                  ></iframe>
                </div>
                {/* TWITCH ICON */}
                {/* TWITTER ICON */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
