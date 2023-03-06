---
id: purchase
title: Purchase / Pricing
sidebar_position: 2
sidebar_label: Purchase / Pricing
---

:::note
Please also check out our [build guide](build-guide.md) as depending on your choice for the components as there might be small extra components (e.g. tape, screws, ...) you will need. These are usually very accessible, e.g. you could buy them from local markets.
:::

The minipad consists of a PCB, the case and analog, magnetic switches, all of which need to be purchased separately. How accessible they are may vary depending on where you live, e.g. lekker switches might not be available for purchase in some countries or have very high shipping fees. Here's a guide on how to purchase them and the approximate pricing for each component!

If you have any questions, feel free to ask them on our [Discord](https://discord.gg/minipad). You can find the technical specifications for the components [here](technical-specifications.md).

## Pricing

As for the pricing of the PCB, there is some stuff to be noted. Most PCB manufacturers have a minimum purchase quantity for them, which is mostly 5-10 PCBs. Because of that, we recommend finding a group of 5 people in total in order to have the most optimal price split.
The same goes for the Lekker switches; They can be bought in Wooting's store in packs of 12 switches. A link to their shop can be found below. Please also note that you can also modify Gateron or Cherry switches to replace Lekker switches. We have a dedicated channel and a lot of people with experience in doing that on our [Discord](https://discord.gg/minipad).

The only component that does not have to be bought in higher quantities is the case. Each of the 5 people can organize purchasing their case themselves, or do it together again and possibly save on shipping fees. This is fully up to you! Further down, you can find a breakdown of what the price of the components looks like in total and what the cost per person in a group of 5 people would be.

<center>
You can find the components here:<br></br>

[PCB](https://github.com/minipadkb/minipad) • [Case](https://github.com/minipadkb/minipad) • [Lekker switches](https://next.wooting.io/product/lekker-switch-linear60-12-pack)
</center>

🚧 Table with price breakdown will be added here. 🚧

## Purchase

Although the PCB can be bought at a lot of other manufacturers, we recommend [JLCPCB](https://jlcpcb.com) as they have very afforable PCB assembly, meaning you don't have to solder anything yourself! If you'd like to purchase the PCB at a different manufacturer, please make sure they support the specifications shown by JLCPCB. Follow the PCB purchase tutorial below and compare the specifications shown on JLCPCB with the ones shown at your manufacturer. If you need help, you can always hit us up on our [Discord](https://discord.gg/minipad). 

As for the case, you have a lot of possibilities. For the 3D printable case, Yyou could print the case yourself if you have a good enough 3D printer at home or you could order a 3D print on JLCPCB too. As for the acrylic case, you might want to look for local manufacturers that are accessible for you. If you are looking for quality, an acrylic case might be the better choice for you. It is very durable and easy to assemble.

The Lekker switches can be simply bought in [Wooting's store](https://next.wooting.io/product/lekker-switch-linear60-12-pack), or you can make your own as mentioned in the Pricing section above.

### Purchasing the PCB

First, head to [JLCPCB's order page](https://cart.jlcpcb.com/quote). Click the button "Add gerber file" and upload the gerber.zip file. If you haven't downloaded the PCB files yet, you can do so from our GitHub repository [here](https://github.com/minipadkb/minipad).

![addgerber-light](./img/addgerber-light.png#light)
![addgerber-dark](./img/addgerber-dark.png#dark)

After that is done, wait for the website to process the gerber archive. Once that's done, some settings should automatically be adjusted. Scroll to the bottom, enable PCB Assembly and copy the settings below. If you'd only like to have two PCBs assembled, you can do so by setting PCBA Qty to 2. This is recommended if you cannot find a group of 5 people as it also reduces the cost a bit.

![pcba-light](./img/pcba-light.png#light)
![pcba-dark](./img/pcba-dark.png#dark)

Next, click on the "Confirm" button and either log-in using a JLCPCB account or your Google account. Then, click on the "Next" button to the right of the website, below the price. The next page shows a render preview of the PCB. Nothing to do there, just click Next again. On the next site shows two buttons, there you upload the bom.csv and cpl.csv file downloaded from the GitHub repository. After that is done, click "Process BOM & CPL".

![bomcpl-light](./img/bomcpl-light.png#light)
![bomcpl-dark](./img/bomcpl-dark.png#dark)

The next page shows a list of all components. If you see a component where it says "... shortfall", it means the component is currently out of stock on JLCPCB and therefore not available for PCB assembly. In this case, please contact us on Discord immediately so we can handle the situation and inform everyone. If everything looks alright, you can proceed by clicking on "Next" again. On the next page, which shows a another render of the PCB again, you can simply click "Next" again too.

![components-light](./img/components-light.png#light)
![components-dark](./img/components-dark.png#dark)

The next page shows the details of the pricing, as well as the total pricing without the shipping fees. Below the total price, you can find a field for the product description. This field needs to be filled out properly in order to gurantee a flawless customs clearance. Please select "Others" in the category "Research\Education\DIY\Entertainment" and then type "hall effect keyboard" in the field below, as shown in the screenshot.

![description-light](./img/description-light.png#light)
![description-dark](./img/description-dark.png#dark)

When everything's done, click on "Save to Cart". You will then be redirected to your shopping cart. There should be two products in your cart, one very cheap one and one more expensive one. These are the PCBs + their assembly. Proceed by clicking "Secure Checkout" on the right and follow further steps on the website. If you are having issues, feel free to ask for help on our [Discord](https://discord.gg/minipad).

### Purchasing the Case

🚧 Info on what to watch out for when purchasing the case will be added here soon. 🚧
