export interface Citation {
  id: string;
  number: number;
  source: string;
  url?: string;
}

export interface ContentBlock {
  type: 'paragraph' | 'blockquote' | 'list' | 'subtitle' | 'table_row';
  content?: string;
  items?: string[]; // For lists
  cols?: string[]; // For table rows
  citationRefs?: number[];
  style?: 'normal' | 'italic' | 'crimson_border';
}

export interface Section {
  id: string;
  title: string;
  level: 1 | 2 | 3;
  blocks: ContentBlock[];
}

export const citations: Citation[] = [
  { id: '1', number: 1, source: 'Wikipedia. (n.d.). Transcendentals.', url: 'https://en.wikipedia.org/wiki/Transcendentals' },
  { id: '2', number: 2, source: 'Catholic Stand. (2023). Eucharistic Revival Pillar Two: Truth, Goodness, and Beauty.', url: 'https://catholicstand.com/pillar-two-truth-goodness-and-beauty/' },
  { id: '4', number: 4, source: 'Pints with Aquinas. (n.d.). #77 - The Transcendentals: Truth, Goodness, and Beauty [Video]. YouTube.', url: 'https://www.youtube.com/watch?v=RVO_IrNMzag' },
  { id: '5', number: 5, source: 'Wikipedia. (n.d.). Absence of good.', url: 'https://en.wikipedia.org/wiki/Absence_of_good' },
  { id: '8', number: 8, source: 'Beets, S. (2002). Augustine\'s Privation Theory of Evil. Calvin Digital Commons.', url: 'https://digitalcommons.calvin.edu/cgi/viewcontent.cgi?article=1008&context=religion_beets' },
  { id: '10', number: 10, source: 'Answers in Genesis. (n.d.). The Tree of the Knowledge of Good and Evil: Evil or Good?.', url: 'https://answersingenesis.org/bible-questions/tree-knowledge-good-and-evil/' },
  { id: '11', number: 11, source: 'Coptic Orthodox Answers. (n.d.). Why did God plant the Tree of Knowledge of Good and Evil?.', url: 'https://copticorthodoxanswers.org/general/why-did-god-plant-the-tree-of-knowledge-of-good-and-evil/' },
  { id: '14', number: 14, source: 'Liberty University Scholars Crossing. (n.d.). What is the New Covenant "Law" in Jeremiah 31:33?.', url: 'https://digitalcommons.liberty.edu/cgi/viewcontent.cgi?article=1273&context=lts_fac_pubs' },
  { id: '15', number: 15, source: 'Bible Hub. (n.d.). Jeremiah 31:33 Study Bible.', url: 'https://biblehub.com/study/jeremiah/31-33.htm' },
  { id: '16', number: 16, source: 'Speaking the Truth in Love. (n.d.). Regeneration: A New Covenant Promise.', url: 'https://voiceoftruthblog.com/regeneration-a-new-covenant-promise' },
  { id: '18', number: 18, source: 'Catholic Exchange. (n.d.). St. Augustine\'s Commentary on the Sermon on the Mount.', url: 'https://catholicexchange.com/st-augustines-commentary-on-the-sermon-on-the-mount/' },
  { id: '19', number: 19, source: 'CatholiCity. (n.d.). Sources of Morality.', url: 'https://www.catholicity.com/catechism/sources_of_morality.html' },
  { id: '21', number: 21, source: 'Archdiocese of Saint Paul and Minneapolis. (n.d.). How can we tell if an action is moral?.', url: 'https://www.archspm.org/how-can-we-tell-if-an-action-is-moral/' },
  { id: '22', number: 22, source: 'John Paul II. (1993). Veritatis Splendor. The Holy See.', url: 'https://www.vatican.va/content/john-paul-ii/en/encyclicals/documents/hf_jp-ii_enc_06081993_veritatis-splendor.html' },
  { id: '23', number: 23, source: 'John Paul II. (1993). Veritatis Splendor (Section 65-70). The Holy See.', url: 'https://www.vatican.va/content/john-paul-ii/en/encyclicals/documents/hf_jp-ii_enc_06081993_veritatis-splendor.html' },
  { id: '24', number: 24, source: 'Taylor & Francis. (2025). Conscience: A Brief History.', url: 'https://www.tandfonline.com/doi/full/10.1080/20502877.2025.2550821' },
  { id: '25', number: 25, source: 'Stanford Encyclopedia of Philosophy. (n.d.). Medieval Theories of Conscience.', url: 'https://plato.stanford.edu/entries/conscience-medieval/' },
  { id: '27', number: 27, source: 'CatholiCity. (n.d.). Mortal and Venial.', url: 'https://www.catholicity.com/catechism/mortal_and_venial.html' },
  { id: '28', number: 28, source: 'Hội đồng Giám mục Việt Nam. (n.d.). Đào tạo lương tâm và sự phân định trong Amoris Laetitia.', url: 'https://hdgmvietnam.com/' },
  { id: '29', number: 29, source: 'Catholic Online. (n.d.). Understanding the Mystery of Iniquity and the Horror of Sin.', url: 'https://www.catholic.org/news/hf/faith/story.php?id=53295' },
  { id: '31', number: 31, source: 'Catholic.com. (n.d.). The 3 Spiritual Traps (and 6 Spiritual Weapons) of Lent [Audio].', url: 'https://www.catholic.com/audio/sp/the-3-spiritual-traps-and-6-spiritual-weapons-of-lent' },
  { id: '33', number: 33, source: 'Pope Leo XIII Institute. (n.d.). FAQ.', url: 'https://popeleo13institute.org/faq' },
  { id: '35', number: 35, source: 'The Catholic Gentleman. (2015). Spiritual Combat: Weapons for Your Arsenal.', url: 'https://catholicgentleman.com/2015/11/spiritual-combat-weapons-for-your-arsenal/' },
  { id: '36', number: 36, source: 'Catholic in Recovery. (n.d.). Arming Ourselves for Spiritual Warfare.', url: 'https://catholicinrecovery.com/' },
  { id: '38', number: 38, source: 'IgnatianSpirituality.com. (n.d.). Introduction to Discernment of Spirits.', url: 'https://www.ignatianspirituality.com/making-good-decisions/discernment-of-spirits/introduction-to-discernment-of-spirits/' },
  { id: '40', number: 40, source: 'Scepter Publishers. (n.d.). 14 Rules for the Discernment of Spirits by St. Ignatius of Loyola.', url: 'https://scepterpublishers.org/blogs/scepter-blog-corner/14-rules-for-the-discernment-of-spirits-by-st-ignatius-of-loyola' },
  { id: '42', number: 42, source: 'SpiritualDirection.com. (2024, August 7). The Rules of Discernment: A Practical Guide - Rule 1.', url: 'https://spiritualdirection.com/2024/08/07/the-rules-of-discernment-a-practical-guide-rule-1' },
];

export const reportData: Section[] = [
  {
    id: 'intro',
    title: '1. Dẫn nhập: Tính Cấp Thiết của Việc Phân Định Trong Thời Đại Mới',
    level: 1,
    blocks: [
      {
        type: 'paragraph',
        content: 'Trong bối cảnh triết học và xã hội đương đại, nơi chủ nghĩa tương đối (relativism) và chủ nghĩa duy cảm xúc (emotivism) đang ngày càng chiếm ưu thế, sự phân định rạch ròi giữa điều thiện và điều ác trở thành một thách thức mang tính sống còn đối với đức tin Kitô giáo. Truyền thống Công giáo, với bề dày lịch sử hai ngàn năm suy tư thần học, không xem sự phân định này đơn thuần là một bài tập trí tuệ hay một sự tuân thủ mù quáng các quy tắc, mà là một hành trình hiện sinh sâu sắc đụng chạm đến chính bản thể của con người trong mối tương quan với Đấng Tạo Hóa.'
      },
      {
        type: 'paragraph',
        content: 'Báo cáo này cung cấp một khảo sát toàn diện và thấu đáo về chủ đề phân định thiện ác, dựa trên nền tảng vững chắc của Kinh Thánh và Truyền thống Giáo hội. Phạm vi nghiên cứu bao trùm từ các nguyên lý siêu hình học về bản chất của sự thiện, qua nhân học Kinh Thánh về tội lỗi và ân sủng, đến các cấu trúc phức tạp của hành vi luân lý theo Thánh Tôma Aquinô, và cuối cùng là nghệ thuật phân định thần khí tinh tế của Thánh Inhaxiô Loyola. Mục tiêu là cung cấp một khung tham chiếu thần học và thực hành vững chắc, giúp người tín hữu và các nhà nghiên cứu định hướng trong "mê cung" của các lựa chọn luân lý hiện đại.'
      }
    ]
  },
  {
    id: 'metaphysics',
    title: '2. Nền Tảng Siêu Hình: Bản Thể Luận về Sự Thiện và Sự Ác',
    level: 1,
    blocks: [
      {
        type: 'paragraph',
        content: 'Để phân định chính xác, trước hết cần phải xác định bản chất hữu thể của đối tượng được phân định. Thần học Công giáo bác bỏ quan niệm nhị nguyên luận (dualism) vốn coi thiện và ác là hai thế lực đối nghịch ngang hàng nhau. Thay vào đó, Giáo hội xây dựng một cái nhìn nhất nguyên về nguồn gốc của hiện hữu.'
      },
      {
        type: 'subtitle',
        content: 'Thiên Chúa là Sự Thiện Tối Cao (Summum Bonum) và Các Đặc Tính Siêu Việt'
      },
      {
        type: 'paragraph',
        content: 'Theo tư tưởng của Thánh Tôma Aquinô và truyền thống Kinh viện, mọi hữu thể, xét theo khía cạnh chúng tồn tại, đều là tốt lành (omne ens est bonum). Điều này bắt nguồn từ niềm tin rằng Thiên Chúa là Đấng Sáng Tạo duy nhất và Ngài là Sự Thiện Tối Cao (Summum Bonum). Mọi thụ tạo đều tham dự vào sự hiện hữu của Thiên Chúa theo những cấp độ khác nhau, và do đó, mang trong mình dấu ấn của sự thiện hảo.',
        citationRefs: [1]
      },
      {
        type: 'paragraph',
        content: 'Khái niệm "Các đặc tính siêu việt" (transcendentals) đóng vai trò trụ cột trong việc hiểu mối liên hệ này. Các đặc tính này bao gồm: Chân lý (Verum), Sự Thiện (Bonum) và Cái Đẹp (Pulchrum). Chúng không phải là những thuộc tính tách biệt mà là những khía cạnh khác nhau của cùng một thực tại hữu thể.'
      },
      {
        type: 'list',
        items: [
          'Chân lý: Là sự tương hợp giữa trí tuệ và thực tại. Thiên Chúa là Chân lý tuyệt đối.',
          'Sự Thiện: Là hữu thể xét như đối tượng của ý chí và khao khát. Thiên Chúa là Sự Thiện thỏa mãn mọi khát vọng.',
          'Cái Đẹp: Là sự rạng ngời của chân lý và sự thiện, làm thỏa mãn thị kiến.'
        ],
        citationRefs: [2]
      },
      {
        type: 'paragraph',
        content: 'Trong thần học luân lý, việc tìm kiếm Thiên Chúa đồng nghĩa với việc hướng về Chân, Thiện, Mỹ. Sự phân định, do đó, là hành trình tìm kiếm dấu vết của các đặc tính siêu việt này trong các lựa chọn cụ thể của đời sống. Một hành động không thể thực sự "đẹp" nếu nó không "thiện", và không thể "thiện" nếu nó không dựa trên "chân lý".',
        citationRefs: [4, 2]
      },
      {
        type: 'subtitle',
        content: 'Sự Ác như là Sự Khiếm Khuyết (Privatio Boni)'
      },
      {
        type: 'paragraph',
        content: 'Nếu Thiên Chúa tạo dựng mọi sự đều tốt lành, thì sự ác bắt nguồn từ đâu? Đây là vấn đề hóc búa (theodicy) mà Thánh Augustinô đã giải quyết triệt để qua học thuyết Privatio Boni (Sự khiếm khuyết của điều thiện).'
      },
      {
        type: 'paragraph',
        content: 'Dựa trên các nghiên cứu, sự ác không có bản thể riêng biệt; nó không phải là một "thứ" hay một "chất" được Thiên Chúa tạo ra. Sự ác là sự vắng mặt, sự thiếu hụt, hoặc sự suy thoái của một điều thiện đáng lẽ phải hiện diện trong một bản thể. Ví dụ:',
        citationRefs: [5]
      },
      {
        type: 'list',
        items: [
          'Sự ác vật lý: Sự mù lòa không phải là một thực thể xâm nhập vào mắt, mà là sự thiếu vắng của thị giác nơi một cơ quan được thiết kế để nhìn.',
          'Sự ác luân lý (Tội): Tương tự, tội lỗi không phải là một "vật" tích cực, mà là sự thiếu vắng trật tự đúng đắn trong ý chí tự do. Khi con người chọn một điều thiện thấp hơn (ví dụ: khoái lạc xác thịt) thay vì một điều thiện cao hơn (ví dụ: sự trung tín trong hôn nhân), họ tạo ra một "lỗ hổng" trong trật tự luân lý.'
        ],
        citationRefs: [8]
      },
      {
        type: 'paragraph',
        content: 'Hệ quả cho việc phân định: Hiểu sự ác là privatio boni giúp người phân định nhận ra rằng không ai khao khát sự ác vì nó là ác. Kẻ phạm tội luôn bị lôi cuốn bởi một khía cạnh "thiện" nào đó (ví dụ: niềm vui, quyền lực, tự do) nhưng lại theo đuổi nó một cách lệch lạc hoặc mất trật tự. Phân định là việc bóc tách lớp vỏ bọc "thiện hảo" giả tạo đó để nhìn thấy sự thiếu hụt cốt yếu bên trong.',
        citationRefs: [8]
      }
    ]
  },
  {
    id: 'biblical-anthropology',
    title: '3. Nhân Học Kinh Thánh và Lịch Sử Cứu Độ trong Việc Phân Định',
    level: 1,
    blocks: [
      {
        type: 'paragraph',
        content: 'Kinh Thánh không trình bày một hệ thống triết học trừu tượng mà kể lại một lịch sử, nơi khả năng phân định của con người bị thử thách, thất bại, và được phục hồi.'
      },
      {
        type: 'subtitle',
        content: 'Cây Biết Điều Thiện và Điều Ác: Giới Hạn và Tự Do (Sáng Thế 2-3)'
      },
      {
        type: 'paragraph',
        content: 'Trình thuật về Vườn Địa Đàng cung cấp mô hình nguyên thủy về sự phân định. "Cây biết điều thiện và điều ác" là một biểu tượng thần học sâu sắc, thường bị hiểu lầm.'
      },
      {
        type: 'paragraph',
        content: 'Theo các chú giải Công giáo, bản thân cái cây và trái của nó không mang độc tố hay sự xấu xa nội tại về mặt vật lý. Cụm từ "biết điều thiện và điều ác" trong tiếng Hí-ri (Yada) mang hàm ý về quyền lực và sự kiểm soát. Nó biểu thị quyền tự quyết định chuẩn mực đạo đức.',
        citationRefs: [10]
      },
      {
        type: 'paragraph',
        content: 'Ý nghĩa lệnh cấm: Khi Thiên Chúa cấm ăn trái cây này, Ngài không keo kiệt tri thức, nhưng Ngài xác định giới hạn hữu thể của con người: Con người là thụ tạo, không phải là Đấng Tạo Hóa. Con người chỉ có thể nhận biết điều thiện đích thực khi đón nhận nó từ Thiên Chúa, chứ không thể tự mình thiết lập nó.',
        citationRefs: [11]
      },
      {
        type: 'paragraph',
        content: 'Bản chất của Tội Nguyên Tổ: Sự sa ngã là nỗ lực của con người muốn chiếm đoạt quyền "phân định tối hậu" – muốn trở nên "như những vị thần" (St 3:5), tự xác định điều gì là tốt và điều gì là xấu cho chính mình mà không cần tham chiếu đến Đấng Tạo Hóa. Đây là sự méo mó căn bản của khả năng phân định: thay vì khám phá trật tự của Chúa, con người áp đặt ý muốn chủ quan lên thực tại.',
        citationRefs: [14]
      },
      {
        type: 'subtitle',
        content: 'Từ Bảng Đá đến Con Tim: Sự Chuyển Dịch của Giao Ước'
      },
      {
        type: 'paragraph',
        content: 'Cựu Ước ghi lại hành trình Thiên Chúa giáo dục lương tâm dân Ngài. Ban đầu, Lề Luật (Torah) được ban hành như một bộ quy tắc khách quan, được khắc trên bia đá để kiềm chế sự sa ngã. Tuy nhiên, lịch sử Israel chứng minh rằng luật bên ngoài không đủ sức biến đổi con người.'
      },
      {
        type: 'paragraph',
        content: 'Các ngôn sứ, đặc biệt là Giêrêmia và Êdêkien, đã tiên báo về một cuộc cách mạng trong phương thức phân định và tuân giữ luật Chúa.',
        citationRefs: [15]
      },
      {
        type: 'table_row',
        cols: ['Đặc điểm', 'Giao Ước Cũ (Luật Môsê)', 'Giao Ước Mới (Tiên tri & Kitô giáo)']
      },
      {
        type: 'table_row',
        cols: ['Vị trí của Luật', 'Khắc trên bia đá, bên ngoài con người.', 'Khắc vào tâm khảm, viết lên trái tim.']
      },
      {
        type: 'table_row',
        cols: ['Động lực', 'Tuân giữ vì sợ hãi hình phạt hoặc nghĩa vụ.', 'Tuân giữ do sự biến đổi nội tâm và tình yêu.']
      },
      {
        type: 'table_row',
        cols: ['Bản chất Phân định', 'Đối chiếu hành vi với văn bản luật pháp.', 'Sự nhạy bén của con tim đã được Thần Khí biến đổi.']
      },
      {
        type: 'table_row',
        cols: ['Câu gốc', 'Xuất hành 20:1-17', 'Giêrêmia 31:33; Êdêkien 36:26']
      },
      {
        type: 'blockquote',
        content: 'Giêrêmia 31:33: "Ta sẽ ghi vào lòng dạ chúng, sẽ khắc vào tâm khảm chúng Lề Luật của Ta." Lời hứa này cho thấy sự phân định thiện ác sẽ trở thành một khuynh hướng nội tại, một sự "cùng bản tính" (connaturality) với điều thiện.',
        citationRefs: [15]
      },
      {
        type: 'blockquote',
        content: 'Êdêkien 36:26: "Ta sẽ ban cho các ngươi một trái tim mới và đặt thần khí mới vào lòng các ngươi." Điều này nhấn mạnh vai trò của ân sủng: khả năng phân định và thực thi điều thiện là quà tặng của Thánh Thần, không phải thành quả của nỗ lực ý chí đơn thuần.',
        citationRefs: [16]
      },
      {
        type: 'subtitle',
        content: 'Bài Giảng Trên Núi và Thang Bậc Hoàn Thiện (Thánh Augustinô)'
      },
      {
        type: 'paragraph',
        content: 'Trong Tân Ước, Đức Giêsu kiện toàn Lề Luật bằng cách đưa nó vào chiều sâu nội tâm. Bài Giảng trên Núi (Mt 5-7) không phải là một bộ luật mới khắt khe hơn, mà là sự mạc khải về đời sống của con cái Thiên Chúa.'
      },
      {
        type: 'paragraph',
        content: 'Thánh Augustinô, trong các bài giảng giải về Bài Giảng trên Núi, đã thiết lập một mối tương quan tuyệt đẹp giữa Bát Phúc (Tám Mối Phúc) và Bảy Ơn Chúa Thánh Thần (dựa trên Isaia 11:2-3). Ngài xem đây là một cấu trúc sư phạm cho sự phân định và thăng tiến tâm linh.',
        citationRefs: [18]
      },
      {
        type: 'list',
        items: [
          'Khởi đầu của Khôn ngoan: Tinh thần nghèo khó tương ứng với Ơn Kính Sợ Chúa (Fear of the Lord). Sự phân định bắt đầu bằng thái độ khiêm cung, nhận biết mình hư vô trước Thiên Chúa.',
          'Sự Phân định Thiện Ác: Ai sầu khổ/khóc lóc tương ứng với Ơn Biết Lo Liệu (Knowledge). Ơn này giúp con người thấu hiểu sự hư vô của thụ tạo và sự nghiêm trọng của tội lỗi, dẫn đến sự "than khóc" thánh thiện. Đây là bước ngoặt của sự phân định: nhận ra sự ác không phải để sợ hãi mà để chữa lành.',
          'Sức mạnh Hành động: Ai khao khát công chính tương ứng với Ơn Mạnh Bạo (Fortitude). Phân định không chỉ là biết, mà là can đảm thực thi công lý.',
          'Sự Thanh Luyện: Ai có lòng trong sạch tương ứng với Ơn Thông Minh (Understanding). Chỉ một con tim đã được thanh luyện khỏi các quyến luyến lệch lạc mới có thể "nhìn thấy" Thiên Chúa và ý định của Ngài trong mọi sự.'
        ],
        citationRefs: [18]
      }
    ]
  },
  {
    id: 'moral-structure',
    title: '4. Cấu Trúc Hành Vi Luân Lý: Ba Nguồn Của Đạo Đức',
    level: 1,
    blocks: [
      {
        type: 'paragraph',
        content: 'Chuyển từ nền tảng Kinh Thánh sang Thần học Luân lý hệ thống, Giáo hội Công giáo cung cấp một khung phân tích chi tiết để đánh giá tính chất thiện ác của một hành vi cụ thể. Sách Giáo Lý Hội Thánh Công Giáo (số 1750-1760) và Thông điệp Veritatis Splendor của Đức Gioan Phaolô II xác định ba nguồn cấu thành đạo đức: Đối tượng, Ý hướng và Hoàn cảnh. Sự toàn vẹn của một hành vi đòi hỏi cả ba yếu tố này đều phải tốt.',
        citationRefs: [19]
      },
      {
        type: 'subtitle',
        content: 'Đối Tượng Được Lựa Chọn (Finis Operis)'
      },
      {
        type: 'paragraph',
        content: 'Đây là yếu tố nền tảng và khách quan nhất. Đối tượng (object) không chỉ là thực tại vật lý của hành động, mà là hành vi được ý chí lựa chọn trong mối tương quan với trật tự luân lý.',
        citationRefs: [21]
      },
      {
        type: 'paragraph',
        content: 'Phân định Đối tượng: Cần đặt câu hỏi: "Hành động này tự bản chất hướng về điều gì?" Ví dụ, hành vi "lấy tài sản của người khác" có thể có đối tượng là "trộm cắp" (nếu lấy trái phép của người sở hữu) hoặc "trưng thu" (nếu chính quyền hợp pháp làm vì công ích).'
      },
      {
        type: 'paragraph',
        content: 'Tính quyết định: Nếu đối tượng là xấu (ví dụ: giết người vô tội), hành vi đó là xấu, bất kể người làm có ý định tốt đẹp thế nào.'
      },
      {
        type: 'subtitle',
        content: 'Ý Hướng Của Chủ Thể (Finis Operantis)'
      },
      {
        type: 'paragraph',
        content: 'Ý hướng (intention) thuộc về chủ thể hành động, là mục đích thúc đẩy người đó thực hiện hành vi.',
        citationRefs: [21]
      },
      {
        type: 'list',
        items: [
          'Nguyên tắc 1: Một ý hướng tốt không thể làm cho một hành vi có đối tượng xấu trở thành tốt. "Cứu cánh không biện minh cho phương tiện" (The end does not justify the means). Ví dụ: Không được phép nói dối (đối tượng xấu) để bảo vệ danh dự (ý hướng tốt).',
          'Nguyên tắc 2: Một ý hướng xấu làm cho một hành vi có đối tượng tốt trở thành xấu. Ví dụ: Cầu nguyện (đối tượng tốt) để được người ta khen ngợi (ý hướng xấu - thói đạo đức giả) làm cho việc cầu nguyện đó trở thành tội.'
        ],
        citationRefs: [19]
      },
      {
        type: 'subtitle',
        content: 'Các Hoàn Cảnh (Circumstances)'
      },
      {
        type: 'paragraph',
        content: 'Hoàn cảnh bao gồm các yếu tố phụ: Ai, làm gì, ở đâu, bằng phương tiện gì, tại sao, thế nào, khi nào.',
        citationRefs: [19]
      },
      {
        type: 'paragraph',
        content: 'Vai trò: Hoàn cảnh góp phần làm gia tăng hoặc giảm nhẹ mức độ tốt/xấu của hành vi, và trách nhiệm của người làm. Ví dụ: Ăn cắp tiền của người nghèo (hoàn cảnh) là tội nặng hơn ăn cắp của người giàu, dù cùng là hành vi trộm cắp.'
      },
      {
        type: 'paragraph',
        content: 'Giới hạn: Hoàn cảnh không bao giờ có thể biến đổi bản chất luân lý của hành vi. Nó không thể làm cho một việc xấu tự bản chất trở thành tốt.',
        citationRefs: [22]
      },
      {
        type: 'subtitle',
        content: 'Học Thuyết về Các Hành Vi Xấu Tự Bản Chất (Intrinsece Malum)'
      },
      {
        type: 'paragraph',
        content: 'Trong thông điệp Veritatis Splendor, Đức Gioan Phaolô II đã mạnh mẽ bảo vệ giáo lý về các hành vi "xấu tự bản chất" (intrinsically evil acts). Đây là những hành vi mà đối tượng của chúng luôn luôn đi ngược lại với thánh ý Chúa và phẩm giá con người, không bao giờ được phép thực hiện, bất chấp mọi hoàn cảnh hay ý định tốt đẹp.',
        citationRefs: [23]
      },
      {
        type: 'paragraph',
        content: 'Danh sách ví dụ: Công đồng Vatican II (Gaudium et Spes, 27) liệt kê: giết người, diệt chủng, phá thai, làm cho êm dịu cái chết (euthanasia), tự tử, tra tấn, mại dâm, buôn bán nô lệ, và những điều kiện làm việc hạ thấp phẩm giá con người.'
      },
      {
        type: 'paragraph',
        content: 'Phản bác Thuyết Vị Lợi: Giáo huấn này trực tiếp bác bỏ các thuyết luân lý như Thuyết Hậu quả (Consequentialism) hay Thuyết Tỉ lệ (Proportionalism), vốn cho rằng người ta có thể cân nhắc giữa "lợi ích" và "tác hại" để biện minh cho một hành vi xấu về mặt đối tượng.',
        citationRefs: [23]
      },
      {
        type: 'subtitle',
        content: 'Sự Lựa Chọn Căn Bản (Fundamental Option) và Những Ngộ Nhận'
      },
      {
        type: 'paragraph',
        content: 'Một cuộc tranh luận thần học lớn trong thế kỷ 20 xoay quanh khái niệm "Sự lựa chọn căn bản". Một số nhà thần học đề xuất rằng điều quyết định tình trạng ân sủng hay tội lỗi của một người là định hướng tổng thể sâu xa của họ về phía Thiên Chúa (lựa chọn siêu việt), chứ không phải là các hành vi cụ thể riêng lẻ (lựa chọn phạm trù). Lập luận sai lầm: Họ cho rằng một người có thể phạm một "tội trọng" về mặt hành vi cụ thể (ví dụ: ngoại tình một lần) mà không nhất thiết đánh mất "sự lựa chọn căn bản" yêu mến Chúa, và do đó không mất ơn cứu độ.',
        citationRefs: [23]
      },
      {
        type: 'paragraph',
        content: 'Sự chấn chỉnh của Giáo hội: Veritatis Splendor (số 65-70) bác bỏ sự tách biệt này. Đức Gioan Phaolô II khẳng định rằng "Sự lựa chọn căn bản" luôn được hiện thực hóa qua các hành vi cụ thể. Con người là một thể thống nhất xác-hồn; không thể có một "tình yêu Chúa" trừu tượng mà lại đi kèm với việc vi phạm cụ thể các Giới răn của Ngài. Mỗi lần chọn lựa một hành vi xấu nghiêm trọng với đầy đủ ý thức và tự do, người ta thực sự đảo ngược sự lựa chọn căn bản của mình, quay lưng lại với Thiên Chúa.',
        citationRefs: [23]
      }
    ]
  },
  {
    id: 'conscience',
    title: '5. Lương Tâm: Cung Thánh của Sự Phân Định Chủ Quan',
    level: 1,
    blocks: [
      {
        type: 'paragraph',
        content: 'Nếu Luật Tự Nhiên và Mạc Khải cung cấp tiêu chuẩn khách quan, thì lương tâm là nơi áp dụng các tiêu chuẩn đó vào thực tế cá nhân.'
      },
      {
        type: 'subtitle',
        content: 'Synderesis và Conscientia: Cấu Trúc Nhận Thức Luân Lý'
      },
      {
        type: 'paragraph',
        content: 'Thánh Tôma Aquinô cung cấp một phân tích tri nhận luận tinh tế về lương tâm, phân biệt hai cấp độ:',
        citationRefs: [24]
      },
      {
        type: 'paragraph',
        content: 'Synderesis (Lương tri / Tàn lửa lương tâm): Đây không phải là một hành vi mà là một thói quen tự nhiên (habitus) của trí năng. Nó lưu giữ các nguyên tắc đầu tiên và phổ quát của luật luân lý, mà nguyên tắc tối thượng là: "Phải làm điều lành và tránh điều dữ".'
      },
      {
        type: 'paragraph',
        content: 'Tính chất: Synderesis không bao giờ sai lầm (infallible) và không thể bị dập tắt hoàn toàn, ngay cả nơi những kẻ gian ác nhất (như Cain hay Giuđa), vẫn còn đó một tia sáng nhận biết điều thiện cơ bản.',
        citationRefs: [24]
      },
      {
        type: 'paragraph',
        content: 'Conscientia (Lương tâm): Đây là hành vi (act) của việc áp dụng tri thức từ synderesis vào một trường hợp cụ thể. Nó hoạt động như một tam đoạn luận thực hành:'
      },
      {
        type: 'list',
        items: [
          'Tiền đề chính (Synderesis): Không được làm chứng gian.',
          'Tiền đề phụ (Lý trí): Lời khai này là sai sự thật.',
          'Kết luận (Lương tâm): Tôi không được nói lời này.'
        ]
      },
      {
        type: 'paragraph',
        content: 'Tính chất: Khác với synderesis, lương tâm có thể sai lầm do suy luận sai, thiếu thông tin, hoặc do các đam mê làm lu mờ lý trí.',
        citationRefs: [25]
      },
      {
        type: 'subtitle',
        content: 'Sự Ngu Dốt và Trách Nhiệm Luân Lý'
      },
      {
        type: 'paragraph',
        content: 'Sự sai lầm của lương tâm dẫn đến vấn đề trách nhiệm. Truyền thống phân biệt hai loại ngu dốt:',
        citationRefs: [24]
      },
      {
        type: 'list',
        items: [
          'Ngu dốt không thể khắc phục (Invincible Ignorance): Khi một người làm điều sai nhưng không có khả năng nhận biết sự thật (do hoàn cảnh văn hóa, giáo dục, tâm lý...). Hành vi này là một "sự ác" vật lý/khách quan nhưng không bị quy là "tội" chủ quan.',
          'Ngu dốt có thể khắc phục (Vincible Ignorance): Khi sự thiếu hiểu biết xuất phát từ sự lười biếng, chểnh mảng trong việc tìm kiếm chân lý, hoặc do thói quen phạm tội làm chai lì lương tâm. Người này chịu trách nhiệm về sự sai lầm của mình.'
        ]
      },
      {
        type: 'subtitle',
        content: 'Đào Tạo Lương Tâm và Mục Vụ Phân Định (Amoris Laetitia)'
      },
      {
        type: 'paragraph',
        content: 'Trong Tông huấn Amoris Laetitia, Đức Phanxicô nhấn mạnh tầm quan trọng của việc "đào tạo lương tâm" trong bối cảnh mục vụ hiện đại.',
        citationRefs: [28]
      },
      {
        type: 'paragraph',
        content: 'Nguyên tắc: "Chúng ta được kêu gọi để đào tạo, không phải để thay thế các lương tâm" (AL 37). Mục tử không áp đặt lề luật như những tảng đá lên vai tín hữu, mà đồng hành để giúp họ tự phân định ý Chúa trong hoàn cảnh cụ thể của họ.'
      },
      {
        type: 'paragraph',
        content: 'Luật Tiệm Tiến (Law of Gradualness): Khái niệm này (từ Thánh Gioan Phaolô II) không có nghĩa là "tính tiệm tiến của luật" (luật thay đổi tùy người), mà là sự tiệm tiến của con người trong việc đạt tới lý tưởng của luật. Phân định giúp nhận ra "bước đi nhỏ" tốt nhất mà một người có thể thực hiện ngay lúc này để đến gần Chúa hơn, dù họ chưa đạt tới sự hoàn thiện khách quan. Đây là sự kết hợp giữa lòng thương xót và chân lý.',
        citationRefs: [28]
      }
    ]
  },
  {
    id: 'mysterium-iniquitatis',
    title: '6. Mầu Nhiệm Sự Ác và Cuộc Chiến Thiêng Liêng',
    level: 1,
    blocks: [
      {
        type: 'paragraph',
        content: 'Phân định không chỉ là một hoạt động trí tuệ mà là một cuộc chiến thiêng liêng chống lại các thế lực đen tối.'
      },
      {
        type: 'subtitle',
        content: 'Mysterium Iniquitatis: Chiều Kích Siêu Nhiên của Tội'
      },
      {
        type: 'paragraph',
        content: 'Thánh Phaolô nói về "Mầu nhiệm sự gian ác" (2 Tx 2,7). Tội lỗi vượt quá sự hiểu biết của lý trí tự nhiên; nó là một sự phản loạn mang tính siêu hình chống lại Thiên Chúa.',
        citationRefs: [29]
      },
      {
        type: 'paragraph',
        content: 'Tội trọng (Mortal Sin) và Tội nhẹ (Venial Sin): Sự phân biệt này rất quan trọng trong phân định.',
        citationRefs: [27]
      },
      {
        type: 'list',
        items: [
          'Tội trọng: Phá vỡ đức mến, làm mất ân sủng thánh hóa, dẫn đến cái chết đời đời nếu không sám hối. Ba điều kiện bắt buộc: (1) Vấn đề nghiêm trọng, (2) Nhận thức đầy đủ, (3) Ưng thuận hoàn toàn.',
          'Tội nhẹ: Làm suy yếu đức mến, cản trở sự tiến bộ linh hồn nhưng không cắt đứt hoàn toàn mối dây với Chúa.'
        ]
      },
      {
        type: 'subtitle',
        content: 'Ba Dục Vọng (1 Ga 2:16): Chiến Trường Nội Tâm'
      },
      {
        type: 'paragraph',
        content: 'Thánh Gioan Tông đồ xác định ba mặt trận chính của cám dỗ, tương ứng với ba chước cám dỗ của Chúa Giêsu trong hoang địa',
        citationRefs: [31]
      },
      {
        type: 'table_row',
        cols: ['Loại Dục Vọng', 'Bản chất', 'Ví dụ Hiện đại', 'Cám dỗ của Chúa Giêsu']
      },
      {
        type: 'table_row',
        cols: ['Dục vọng xác thịt', 'Tham muốn khoái lạc giác quan vô độ. Bản năng sinh tồn bị lệch lạc.', 'Nghiện ngập, dâm dục, ham ăn uống.', 'Biến đá thành bánh.']
      },
      {
        type: 'table_row',
        cols: ['Dục vọng đôi mắt', 'Tham lam vật chất, sở hữu những gì mình thấy. Sự dính bén vào của cải.', 'Chủ nghĩa tiêu thụ, chạy đua hàng hiệu, tham tiền.', 'Xem mọi vinh hoa thế gian và muốn sở hữu.']
      },
      {
        type: 'table_row',
        cols: ['Kiêu ngạo cuộc đời', 'Khát vọng danh vọng, quyền lực, tự tôn. Muốn thay thế Chúa.', 'Tham vọng thăng tiến bằng mọi giá, tự ái, ngạo mạn.', 'Gieo mình xuống từ đền thờ để chứng tỏ quyền năng.']
      },
      {
        type: 'subtitle',
        content: 'Vũ Khí Thiêng Liêng và Sự Canh Giữ Con Tim'
      },
      {
        type: 'paragraph',
        content: 'Truyền thống tu đức (đặc biệt các Giáo phụ Sa mạc) nhấn mạnh sự thực hành Custody of the Heart (Canh giữ con tim/Nepsis). Đây là sự tỉnh thức thường trực ngay tại "cửa ngõ" của tâm hồn để kiểm soát các tư tưởng (logismoi) ngay khi chúng mới xuất hiện.',
        citationRefs: [33]
      },
      {
        type: 'paragraph',
        content: 'Chiến thuật: Không đối thoại với cám dỗ (như Eva đã làm), nhưng dùng Lời Chúa để đập tan nó ngay lập tức (như Chúa Giêsu đã làm).',
        citationRefs: [35]
      },
      {
        type: 'paragraph',
        content: 'Các khí cụ: Cầu nguyện, Chay tịnh, Bố thí, và các Bí tích (Hòa giải, Thánh Thể) là những vũ khí không thể thay thế trong cuộc chiến này.',
        citationRefs: [36]
      }
    ]
  },
  {
    id: 'ignatian-discernment',
    title: '7. Nghệ Thuật Phân Định Thần Khí: Truyền Thống I-Nhã',
    level: 1,
    blocks: [
      {
        type: 'paragraph',
        content: 'Thánh Inhaxiô Loyola, qua cuốn Linh Thao, đã cung cấp một phương pháp luận chi tiết để nhận diện tác động của các thần khí (Thần khí Chúa và Thần khí dữ) lên tâm hồn.',
        citationRefs: [38]
      },
      {
        type: 'subtitle',
        content: 'An Ủi và Sầu Khổ: Ngôn Ngữ của Linh Hồn'
      },
      {
        type: 'paragraph',
        content: 'An Ủi Thiêng Liêng (Consolation): Là sự gia tăng của đức Tin, Cậy, Mến; cảm giác bình an sâu thẳm, hối tiếc tội lỗi, khao khát phục vụ Chúa. Lưu ý: Không phải lúc nào cũng là cảm xúc vui vẻ hưng phấn, mà có thể là những giọt nước mắt đau đớn vì yêu mến.',
        citationRefs: [38]
      },
      {
        type: 'paragraph',
        content: 'Sầu Khổ Thiêng Liêng (Desolation): Là sự tối tăm, xao xuyến, bị cám dỗ về những điều thấp hèn, mất lòng tin, cảm thấy lười biếng và xa cách Chúa.'
      },
      {
        type: 'paragraph',
        content: 'Ba nguyên nhân của sầu khổ: (1) Do ta lười biếng; (2) Chúa thử thách để ta trưởng thành; (3) Để ta nhận biết mọi ân sủng là quà tặng nhưng không, tránh kiêu ngạo.',
        citationRefs: [40]
      },
      {
        type: 'subtitle',
        content: 'Các Quy Tắc Phân Định (Tuần I và Tuần II)'
      },
      {
        type: 'subtitle',
        content: 'Đối với người đi từ tội trọng này sang tội trọng khác (Quy tắc 1 - Tuần I)'
      },
      {
        type: 'paragraph',
        content: 'Thần khí dữ: Trấn an, gợi lên những khoái lạc giác quan, làm cho tội lỗi có vẻ ngọt ngào để giữ người đó lại trong tội.'
      },
      {
        type: 'paragraph',
        content: 'Thần khí lành: Cắn rứt lương tâm, gây lo lắng, bất an để thức tỉnh người đó.',
        citationRefs: [42]
      },
      {
        type: 'paragraph',
        content: 'Phân định: Trong trạng thái tội lỗi, sự "bình an" là dấu hiệu nguy hiểm, sự "day dứt" là ân sủng.'
      },
      {
        type: 'subtitle',
        content: 'Đối với người đang tiến bộ từ tốt đến tốt hơn (Quy tắc 2 - Tuần I)'
      },
      {
        type: 'paragraph',
        content: 'Thần khí dữ: Gây buồn phiền vô cớ, tạo ra chướng ngại vật giả tạo, gieo rắc sự sợ hãi để ngăn cản bước tiến.'
      },
      {
        type: 'paragraph',
        content: 'Thần khí lành: Ban sức mạnh, an ủi, soi sáng, làm cho mọi sự trở nên nhẹ nhàng.',
        citationRefs: [40]
      },
      {
        type: 'subtitle',
        content: 'Chiến thuật trong lúc Sầu Khổ (Quy tắc 5-9)'
      },
      {
        type: 'paragraph',
        content: 'Quy tắc vàng (Quy tắc 5): "Trong lúc sầu khổ, không bao giờ được thay đổi quyết định.". Vì lúc này, phán đoán của ta bị nhiễu loạn bởi tà thần. Hãy kiên vững với quyết định đã có khi đang được an ủi.',
        citationRefs: [40]
      },
      {
        type: 'paragraph',
        content: 'Agere Contra (Làm ngược lại - Quy tắc 6): Nếu sầu khổ xúi bỏ cầu nguyện, hãy cầu nguyện lâu hơn. Nếu xúi ăn uống vô độ, hãy chay tịnh thêm.',
        citationRefs: [40]
      },
      {
        type: 'subtitle',
        content: 'Nhận Diện Chiến Thuật của Kẻ Thù (Quy tắc 12-14)'
      },
      {
        type: 'paragraph',
        content: 'Thánh Inhaxiô ví ma quỷ với ba hình ảnh tâm lý sắc sảo:',
        citationRefs: [40]
      },
      {
        type: 'list',
        items: [
          'Người phụ nữ đanh đá (nhưng yếu đuối): Nếu ta kiên quyết chống trả ngay từ đầu, hắn sẽ sợ hãi bỏ chạy. Nếu ta sợ hãi nhượng bộ, hắn sẽ lấn tới hung dữ và tàn bạo.',
          'Kẻ tình nhân lén lút: Hắn muốn ta giữ kín các cám dỗ, không nói với ai. "Sự im lặng" là đồng minh của ma quỷ. Khi ta xưng thú với linh hướng, quyền lực hắn bị bẻ gãy.',
          'Vị tướng chỉ huy: Hắn đi rảo quanh thành trì tâm hồn để tìm điểm yếu nhất (nhân đức yếu kém nhất) và tập trung tấn công vào đó. Phân định đòi hỏi ta phải biết "tử huyệt" của mình để gia cố.'
        ]
      }
    ]
  },
  {
    id: 'conclusion',
    title: '8. Kết Luận: Hướng Tới Một Nền Văn Hóa Phân Định',
    level: 1,
    blocks: [
      {
        type: 'paragraph',
        content: 'Khảo sát toàn diện về sự phân định thiện ác trong Công giáo cho thấy đây là một hệ thống tri thức và thực hành vô cùng phong phú, kết hợp giữa sự chặt chẽ của lý trí (Thánh Tôma) và sự tinh tế của tâm lý học thiêng liêng (Thánh Inhaxiô).'
      },
      {
        type: 'paragraph',
        content: 'Trong thế giới hiện đại đầy biến động, người tín hữu được mời gọi không chỉ tuân thủ luật pháp một cách thụ động, mà phải trưởng thành trong khả năng phân định. Điều này đòi hỏi:'
      },
      {
        type: 'list',
        items: [
          'Một nền tảng tri thức vững chắc về giáo lý và luân lý (để biết Đối tượng).',
          'Một đời sống cầu nguyện sâu sắc và thường xuyên lãnh nhận Bí tích (để thanh luyện Ý hướng và củng cố Lương tâm).',
          'Sự tỉnh thức liên lỉ và khiêm tốn tìm kiếm sự đồng hành thiêng liêng (để nhận diện mánh lới của Thần khí dữ).'
        ]
      },
      {
        type: 'paragraph',
        content: 'Cuối cùng, mục đích của phân định không chỉ là để tránh tội, mà là để nhận ra và thi hành "điều thiện, điều đẹp lòng Chúa và điều hoàn hảo" (Rm 12,2), qua đó họa lại hình ảnh Đức Kitô trong chính cuộc đời mình.'
      }
    ]
  }
];
