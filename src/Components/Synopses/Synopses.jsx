import React from "react";
import style from "./Synopses.module.css";

const Synopses = () => {
  return (
    <div className={style.container}>
      <div className={style.top}>
        <h4>Synopses Of These Courses</h4>
      </div>
      <div className={style.content}>
        <table>
          <tr>
            <th></th>
            <th>PROGRAM</th>
            <th>DESCRIPTION</th>
            <th>DURATION</th>
          </tr>
          <tr>
            <td>1.</td>
            <td><span>Graphics Design.</span></td>
            <td>
                This course will enable the beneficiary to;
              <ul>
                <li>
                  Use Microsoft Office Software for creating, managing,
                  analyzing, and sharing information.
                </li>
                <li>
                  Use Photoshop and Corel Draw for Creating Images, Logos and
                  various other arts.
                </li>
                <li>
                  Use InDesign which provides many time-saving tools and
                  features for the creation of high-quality printable documents.
                </li>
              </ul>
            </td>
            <td>3 Months</td>
          </tr>

          <tr>
            <td>2.</td>
            <td><span>Python Programming</span></td>
            <td>
                This course will enable the beneficiary to;
              <ul>
                <li>Know how to build websites and applications</li>
                <li>Ability to analyze data</li>
                <li>Acquire code-writing knowledge</li>
              </ul>
            </td>
            <td>3 Months</td>
          </tr>

          <tr>
            <td>3.</td>
            <td><span>UI/UX Design</span></td>
            <td>
              This course will enable the beneficiary to;
              <ul>
                <li>Know how to design website Apps and Brand using FIGMA.</li>
                <li>It will introduce you to the product design cycle</li>
                <li>
                  To understand user experience fundamentals, user interface
                  design basic and user research strategy
                </li>
              </ul>
            </td>
            <td>3 Months</td>
          </tr>

          <tr>
            <td>4.</td>
            <td><span>Hardware/ Network/ Cyber-Security</span></td>
            <td>
              This course will enable the beneficiary to;
              <p>(Hardware)</p>
              <ul>
                <li>Describe computers and their components.</li>
                <li>
                  Install, maintain, and troubleshoot computer components and
                  peripherals.
                </li>
                <li>
                  Diagnose and troubleshoot issues affecting laptops and
                  personal computing devices. Install and configure the Windows
                  OS
                </li>
              </ul>

              <p>(Cyber-Security)</p>
              <ul>
                <li>
                  To understand and implement basic security services on the
                  network.
                </li>
                <li>Understand Common threats, their attacks and defense.</li>
                <li>Ethernet and Internet Protocols</li>
              </ul>

              <p>(Network)</p>
              <ul>
                <li>
                  Be equipped with knowledge of networking concepts and the
                  skills required to set up, manage, troubleshoot, and secure
                  networks.
                </li>
                <li>
                  Have the ability to implement security mechanisms to prevent
                  and mitigate security attacks.
                </li>
              </ul>
            </td>
            <td>3 Months</td>
          </tr>

          <tr>
            <td>5.</td>
            <td><span>Web Design (Front End)</span></td>
            <td>
              This course will enable the beneficiary to;
              <ul>
                <li>Create web pages and web site using HTML</li>
                <li>Know how to style and layout web pages using CSS</li>
                <li>
                  Know how to validate web forms using various JAVASCRIPT
                  methods
                </li>
              </ul>
            </td>
            <td>3 Months</td>
          </tr>

          <tr>
            <td>6.</td>
            <td><span>Generative AI for Entrepreneurs</span></td>
            <td>
                This course will enable the beneficiary to;
              <ul>
                <li>Know the uses of AI for businesses and society</li>
                <li>Building games with AI</li>
                <li>Detecting patterns with unsupervised learning</li>
              </ul>
            </td>
            <td>3 Months</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Synopses;
